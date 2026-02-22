import path from 'path'
import fs from 'fs'

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

const CHART_KEYS = ['party', 'wedding', 'combined', 'donotplay'] as const

const CHART_LABELS: Record<string, string> = {
  party:     'Party Charts',
  wedding:   'Wedding Charts',
  combined:  'Combined Charts',
  donotplay: 'Do Not Play',
}

// Path to the committed JSON cache files
const CACHE_DIR = path.join(process.cwd(), 'src/data/charts')

function loadFromCache(key: string): ChartCollection | null {
  try {
    const filePath = path.join(CACHE_DIR, `${key}.json`)
    if (!fs.existsSync(filePath)) return null
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw) as ChartCollection
  } catch {
    return null
  }
}

export async function fetchAllCharts(): Promise<ChartCollection[]> {
  return CHART_KEYS.map(key => {
    const cached = loadFromCache(key)
    if (cached) {
      console.log(`[charts] ${key}: loaded from cache (${cached.charts.length} charts)`)
      return cached
    }
    console.warn(`[charts] ${key}: no cache file at src/data/charts/${key}.json — run: node scripts/fetchCharts.mjs`)
    return { label: CHART_LABELS[key], charts: [], fetchedAt: '' }
  })
}

// Exported for use by scripts/fetchCharts.mjs
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

function insertSpaces(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1 $2')
    .replace(/(\d)([A-Za-z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
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
