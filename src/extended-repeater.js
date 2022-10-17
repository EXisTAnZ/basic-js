const { NotImplementedError } = require('../extensions/index.js');

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
  let defOptions = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: options.addition || '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || ''
  }
  let strAddition = (defOptions.addition+defOptions.additionSeparator).repeat(defOptions.additionRepeatTimes).slice(0,-defOptions.additionSeparator.length);
  console.log(strAddition);
  return (str + strAddition + defOptions.separator).repeat(defOptions.repeatTimes).slice(0,-defOptions.separator.length);
}

module.exports = {
  repeater
};
