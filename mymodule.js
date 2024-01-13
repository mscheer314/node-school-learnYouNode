'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function printFileInDirectory(directoryName, ext, callback) {
    fs.readdir(directoryName,(err, data) => {
        if (err) {
            return callback(err)
        }
        data = data.filter(function (file) {
            return path.extname(file) === '.' + ext
        })
        return callback(null, data)
    })
}
