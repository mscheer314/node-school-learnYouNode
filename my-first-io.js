'use strict'

const fs = require('fs')

const buffer = fs.readFileSync(process.argv[2])
const lines = buffer.toString().split('\n')
console.log(lines.length - 1)