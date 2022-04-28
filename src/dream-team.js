const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  let arr = [];
  if (Array.isArray(team) === false) {
    return false;
  }
  team.map(function (e) {
    if (typeof e === "string") {
      e = e.replace(/ /g, "");
      arr.push(e[0].toUpperCase());
    }
  });
  arr.sort();
  let res = arr.join("");
  return res;
}

module.exports = {
  createDreamTeam,
};
