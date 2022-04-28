const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function turns(disks) {
    if (disks == 0) {
      return 0;
    }
    if (disks == 1) {
      return 1;
    }
    let count = 1;

    for (let i = 2; i < disks + 1; i++) {
      count = count * 2 + 1;
    }
    return count;
  }

  let obj = {
    turns: turns(disksNumber),
    seconds: Math.floor((turns(disksNumber) / turnsSpeed) * 3600),
  };

  return obj;
}

module.exports = {
  calculateHanoi,
};
