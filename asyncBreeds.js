const fs = require('fs');

const breedDetailsFromFile = function(breed, action) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
      action(data);
  });
};

const returnData = (data) => console.log(data);

module.exports = breedDetailsFromFile;