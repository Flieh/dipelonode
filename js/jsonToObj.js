'use strict'
const fs = require('fs')

module.exports = function jsonToJs (inFile) {
  fs.readFile(
    inFile, 'utf8', parseContents
  )
}

function parseContents (err, contents) {
  if (err) throw err
  let list = JSON.parse(contents)
  echoList(list)
}

function echoList (list) {
  getHeaders(list)
  for (let i = 0; i < list.length; i++) {
  }
}

function getHeaders (list) {
  for (let item in list) {
    console.log(item instanceof Array)
  }
}
