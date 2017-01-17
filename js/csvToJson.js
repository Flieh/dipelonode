'use strict';
const fs =  require('fs');
module.exports = function (inFile, outFile) {

  fs.readFile(
    inFile, 'utf8',
    function (err, contents) {
      if (err) throw err;
      let lines = contents.split('\n');
      let headers = lines[0].split(',');
      for (let i = 0 ; i < headers.length ; i++) {
        headers[i] = headers[i].replace('"','');
        headers[i] = headers[i].replace('\"','');
      }
      let gameList = [];
      for (let i = 1 ; i < lines.length ; i++) {
        let game = {};
        let line = lines[i].split(',');
        for (let j = 0 ; j < line.length ; j++) {
          line[j] = line[j].replace('"','');
          line[j] = line[j].replace('\"','');
          game[headers[j]] = line[j];
        }
        gameList.push(game);
      }
      let options = {flag: 'a'};
      fs.writeFile(
        outFile, 
        JSON.stringify(gameList), 
        options,
        function (err) {
          if (err) throw err;
          console.log('done');
        } 
      );
    }
  );
};



