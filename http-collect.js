'use strict'

const http = require('http')
const urlToHit = process.argv[2]
let collectedString = ''
http.get(urlToHit, (res) => {
    res.on('data', (e) => {
        collectedString += e.toString()
    })
    res.on('end', () => {
        console.log(collectedString.length)
        console.log(collectedString)
    })
})
