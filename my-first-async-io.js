'use strict'

const fs = require('fs')

const output = fs.readFile(process.argv[2], (err, data) => {
    const content = data.toString().split('\n')
    console.log(content.length - 1)
})
