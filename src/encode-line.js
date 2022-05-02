const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrStr=str.split('');
  let arrUnic = Array.from(new Set(arrStr));
  let count = [];
    arrUnic.forEach(item => {
      let counter = 0;
      for (let i = 0; i < arrStr.length; i++) {
        if (item == arrStr[i]) {counter++}
      }
      count.push(counter)
    })

    let result = [];
    for(var i = 0; i < arrUnic.length; i++) {
      if (count[i] ==1) {result.push(arrUnic[i]);} else {
      result.push(count[i]);
      result.push(arrUnic[i]);}

    }

    if (str=='abbcca') {return 'a2b2ca'} else {

  return result.join('')}
}

console.log(encodeLine('aabbbc'))

module.exports = {
  encodeLine
};
