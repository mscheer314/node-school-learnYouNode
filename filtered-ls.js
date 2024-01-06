'use strict'
const fs = require('fs')

const directory = process.argv[2]
const extensionToFilterBy = process.argv[3]

function doesMatchExtensionToFilterBy(file, extension) {}
fs.readdir(directory, (err, files) => {
    for (let file of files) {
        if(file.substring(file.indexOf('.') + 1) === extensionToFilterBy &&
            file.indexOf('.') !== -1) {
          console.log(file)
        }
    }
})
