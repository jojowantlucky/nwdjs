export interface ChartSong {
  rank: number
  text: string
}

export interface Chart {
  title: string
  description: string
  songs: ChartSong[]
}

export interface ChartCollection {
  label: string
  charts: Chart[]
  fetchedAt: string
}

const CHART_URLS: Record<string, string> = {
  party:     'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequested',
  wedding:   'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequestedWedding',
  combined:  'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequestedAll',
  donotplay: 'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=DoNotPlay',
}

const CHART_LABELS: Record<string, string> = {
  party:     'Party Charts',
  wedding:   'Wedding Charts',
  combined:  'Combined Charts',
  donotplay: 'Do Not Play',
}

const SKIP_LINES = ['RANK ARTIST SONG', 'RANK ARTIST SONG YEAR', 'RANKARTISTSONG', 'RANKARTISTSONGYEAR']

function isBoilerplate(line: string): boolean {
  return SKIP_LINES.includes(line) ||
    line.startsWith('Copyright ©') ||
    line.startsWith('Charts may not') ||
    line.startsWith('Intelligence, Inc.') ||
    line.startsWith('Over one million') ||
    line.startsWith('Follow DJ') ||
    line.startsWith('Plan yours') ||
    line.startsWith('facebook.com') ||
    line.startsWith('x.com') ||
    line.startsWith('djintelligence.com')
}

function isChartTitle(line: string): boolean {
  return /^Top \d/.test(line) || line.startsWith('Most Requested') || line.startsWith('Do Not Play')
}

/** Insert spaces at column-merge boundaries that pdf-parse drops */
function insertSpaces(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2')        // centIn → cent In
    .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1 $2') // ABBADancing → ABBA Dancing
    .replace(/(\d)([A-Za-z])/g, '$1 $2')          // 50Cent → 50 Cent
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')          // edge cases
}

export function parseCharts(text: string): Chart[] {
  const charts: Chart[] = []
  let current: Chart | null = null
  let expectedRank = 1

  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line || isBoilerplate(line)) continue

    if (isChartTitle(line)) {
      if (current && current.songs.length > 0) charts.push(current)
      current = { title: line, description: '', songs: [] }
      expectedRank = 1
      continue
    }

    if (!current) continue

    if (line.startsWith('Compiled from') || line.startsWith('Songs that appear')) {
      current.description = line
      continue
    }

    const m = line.match(/^(\d+)(.+)$/)
    if (!m) continue

    let rank = parseInt(m[1], 10)
    let rest = m[2]

    // Fix rank collision: e.g. "5850Cent In Da Club" where rank=58, artist starts with "50"
    // If parsed rank doesn't match expected but expected is a prefix of the digits found,
    // peel off only the expected rank's digits and push the rest into the song text.
    const expectedStr = String(expectedRank)
    if (rank !== expectedRank && m[1].startsWith(expectedStr) && m[1].length > expectedStr.length) {
      rank = expectedRank
      rest = m[1].slice(expectedStr.length) + m[2]
    }

    const songText = insertSpaces(rest.trim())
    if (songText) {
      current.songs.push({ rank, text: songText })
      expectedRank = rank + 1
    }
  }

  if (current && current.songs.length > 0) charts.push(current)
  return charts
}

async function fetchChartCollection(key: string): Promise<ChartCollection> {
  const label = CHART_LABELS[key]
  try {
    const res = await fetch(CHART_URLS[key], {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const buffer = Buffer.from(await res.arrayBuffer())
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pdfParse = require('pdf-parse/lib/pdf-parse.js')
    const data = await pdfParse(buffer)
    const charts = parseCharts(data.text as string)

    console.log(`[charts] ${key}: ${charts.length} charts | songs: ${charts.map(c => c.songs.length).join(', ')}`)
    return { label, charts, fetchedAt: new Date().toISOString() }
  } catch (e) {
    console.error(`[charts] FAILED ${key}:`, e)
    return { label, charts: [], fetchedAt: '' }
  }
}

export async function fetchAllCharts(): Promise<ChartCollection[]> {
  return Promise.all(
    Object.keys(CHART_URLS).map(k => fetchChartCollection(k))
  )
}
