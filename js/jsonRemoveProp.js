'use strict'
const fs = require('fs')

module.exports = function (inFile, outFile, ...propsToRemove) {
  fs.readFile(
    inFile,
    'utf8',
    function (err, contents) {
      if (err) throw err
      let json = JSON.parse(contents)
      let newList = []

      for (let i in json) {
        if (!json.hasOwnProperty(i)) continue
        let newGame = {}
        for (let j in json[i]) {
          if (!json[i].hasOwnProperty(j)) continue
          if (!(propsToRemove.includes(j))) {
            newGame[j] = json[i][j]
          }
        }
        newList.push(newGame)
      }

      let options = {
        flag: 'w'
      }
      fs.writeFile(
        outFile,
        JSON.stringify(newList),
        options,
        function (err) {
          if (err) throw err
          console.log('file %s saved', outFile)
        }
      )
    }
  )
}
