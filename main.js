'use strict'
let toolBox = require('./js/toolBox.js')

// let csvToJson = require('./js/csvToJson.js')
let jsonRemoveProp = require('./js/jsonRemoveProp.js')
// csvToJson('csv/test.csv', 'json/test.json')
jsonRemoveProp('json/test.json', 'json/new.json', 'Timestamp', 'xEmail')