#!/usr/bin/env node
/* eslint-disable no-console */

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createInterface } from 'node:readline'
import { fileURLToPath } from 'node:url'

const filename = fileURLToPath(import.meta.url)
const directory = dirname(filename)

const TEMPLATES = {
  1: { name: 'React + Tailwind', file: 'react.js' },
  2: { name: 'Next.js + Tailwind', file: 'nextjs.js' },
  3: { name: 'Pure TypeScript', file: 'typescript.js' }
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function main() {
  console.log('\n@viclafouch/eslint-config-viclafouch\n')
  console.log('Select your stack:\n')

  for (const [key, value] of Object.entries(TEMPLATES)) {
    console.log(`  ${key}. ${value.name}`)
  }

  console.log('')

  const answer = await question('Your choice (1-3): ')
  const choice = TEMPLATES[answer]

  if (!choice) {
    console.log('\nInvalid choice. Exiting.\n')
    rl.close()
    process.exit(1)
  }

  const templatePath = join(directory, '..', 'templates', choice.file)
  const targetPath = join(process.cwd(), 'eslint.config.js')

  if (existsSync(targetPath)) {
    const overwrite = await question(
      '\neslint.config.js already exists. Overwrite? (y/N): '
    )

    if (overwrite.toLowerCase() !== 'y') {
      console.log('\nAborted.\n')
      rl.close()
      process.exit(0)
    }
  }

  const template = readFileSync(templatePath, 'utf-8')
  writeFileSync(targetPath, template)

  console.log(`\neslint.config.js created with ${choice.name} configuration.\n`)
  console.log('Next steps:')
  console.log('  1. Run: npm i -D @viclafouch/eslint-config-viclafouch')
  console.log('  2. Run: npm run lint\n')

  rl.close()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
