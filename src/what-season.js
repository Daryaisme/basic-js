const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let invalid = Object.keys(date);
  if(!(date instanceof Date) || (!date.getTime) || (invalid.length > 0) ){    
    throw new Error('Invalid date!');
  }
  let season = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }
  let qua = 0
  for (value of Object.values(season)) {
    for (number of value) {
      if (number !== date.getMonth()) {
        console.log(number)
        console.log(qua)
        qua++
      }
      else
        return Object.keys(season)[parseInt(qua / 3)]
    }
  }
}

module.exports = {
  getSeason
};
