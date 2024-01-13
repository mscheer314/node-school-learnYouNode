'use strict'

const http = require('http')
const urlToHit = process.argv[2]

http.get(urlToHit, (res) => {
   res.on('data', (e) => {
       console.log(e.toString())
   })

})
