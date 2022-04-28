const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;

  if (!options.separator) {
    options.separator = "+";
  }
  if (options.separator == "") {
    options.separator = "+";
  }
  if (options.additionSeparator == "") {
    options.additionSeparator = "|";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes == "") {
    options.repeatTimes = 0;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 0;
  }
  if (options.addition == "") {
    options.addition = "";
  }
  if (options.addition == false) {
    options.addition = "false";
  }
  if (options.addition === null) {
    options.addition = "null";
  }

  if (!options.addition) {
    options.addition = "";
  }
  options.addition = `${options.addition}`;

  let fchain = `${str}` + `${options.addition}`;
  let add = `${options.additionSeparator}` + `${options.addition}`;
  let addR = "";
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    addR += add;
  }
  fchain += addR;
  let chain = fchain;
  for (let i = 1; i < options.repeatTimes; i++) {
    chain += `${options.separator}` + fchain;
  }
  return chain;
}

module.exports = {
  repeater,
};
