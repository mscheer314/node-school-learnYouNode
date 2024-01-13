'use strict'

const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
        console.log('Something went wrong: ', err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})
