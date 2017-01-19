'use strict'
let _ = require('lodash')
let toolBox = require('./js/toolBox.js')
let fs = require('fs')

// let csvToJson = require('./js/csvToJson.js')
let jsonRemoveProp = require('./js/jsonRemoveProp.js')
// csvToJson('csv/test.csv', 'json/test.json')
jsonRemoveProp('json/test.json', 'json/new.json', 'Timestamp', 'xEmail')
fs.writeFile('json/combined.json', _.concat('json/new.json', 'json/test.json'))

