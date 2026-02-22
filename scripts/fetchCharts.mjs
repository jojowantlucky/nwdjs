#!/usr/bin/env node
/**
 * Fetch DJ Intelligence chart PDFs and save them as JSON cache files.
 * Run this locally whenever you want to refresh the song lists:
 *
 *   node scripts/fetchCharts.mjs
 *
 * Then commit the updated src/data/charts/*.json files.
 * The build will use these files instead of fetching live, so DeployHQ
 * never needs to reach DJ Intelligence.
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const CHART_URLS = {
  party:     'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequested',
  wedding:   'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequestedWedding',
  combined:  'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=MostRequestedAll',
  donotplay: 'https://www.djintelligence.com/charts/?email=info@noteworthydjs.com&authkey=ZBNAR3DP2XJiF09ihbFBJWdDS4sh49&chart=DoNotPlay',
}

const CHART_LABELS = {
  party:     'Party Charts',
  wedding:   'Wedding Charts',
  combined:  'Combined Charts',
  donotplay: 'Do Not Play',
}

const SKIP_LINES = ['RANK ARTIST SONG', 'RANK ARTIST SONG YEAR', 'RANKARTISTSONG', 'RANKARTISTSONGYEAR']

function isBoilerplate(line) {
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

function isChartTitle(line) {
  return /^Top \d/.test(line) || line.startsWith('Most Requested') || line.startsWith('Do Not Play')
}

function insertSpaces(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1 $2')
    .replace(/(\d)([A-Za-z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
}

function parseCharts(text) {
  const charts = []
  let current = null
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

const outDir = join(__dirname, '../src/data/charts')
mkdirSync(outDir, { recursive: true })

for (const [key, url] of Object.entries(CHART_URLS)) {
  process.stdout.write(`Fetching ${key}... `)
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const buffer = Buffer.from(await res.arrayBuffer())
    const pdfParse = require('pdf-parse/lib/pdf-parse.js')
    const data = await pdfParse(buffer)
    const charts = parseCharts(data.text)

    const out = {
      label: CHART_LABELS[key],
      charts,
      fetchedAt: new Date().toISOString(),
    }

    writeFileSync(join(outDir, `${key}.json`), JSON.stringify(out, null, 2))
    console.log(`✓ ${charts.length} charts, ${charts.reduce((n, c) => n + c.songs.length, 0)} songs`)
  } catch (e) {
    console.error(`✗ FAILED: ${e.message}`)
  }
}

console.log('\nDone. Now run:')
console.log('  git add src/data/charts/*.json && git commit -m "Refresh chart cache" && git push origin updates')
