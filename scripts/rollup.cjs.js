const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '../src')
const cjsDist = path.resolve(__dirname, '../dist')

const globalInputOptions = {

}

const globalOutputOptions = {

}

async function build (file) {
  let input = path.resolve(src, file)
  let inputOptions = Object.assign({
    input
  }, globalInputOptions)
  let outputOptions = Object.assign({
    format: 'es',
    file: path.resolve(cjsDist, file)
  }, globalOutputOptions)
  const bundle = await rollup.rollup(inputOptions)

  const { code, map } = await bundle.generate(outputOptions)
  await bundle.write(outputOptions)
}

function getDirEntries (dir) {
  return new Promise((resolve, reject) => {
    fs.readDir(src, (err, files) => {
      if (err) {
        return reject(err)
      }
      resolve(files)
    })
  })
}

build('index.js')
// build('isArray.js')
