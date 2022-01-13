/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
const fs = require('fs-extra')
const path = require('path')
const pug = require('pug')
const { performance } = require('perf_hooks')
async function main() {
  const workspace = process.cwd()
  const benchmarkDir = path.join(workspace, './docs/benchmark')
  const svg1Pug = path.join(benchmarkDir, 'svg1.pug')
  const svg1OutputPath = path.join(benchmarkDir, 'svg1.html')
  const svg1Tpl = pug.compileFile(svg1Pug)

  await fs.outputFile(svg1OutputPath, svg1Tpl({}))

  console.log('done')
}

main()
