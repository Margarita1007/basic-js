const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=[];
  let arrNum =String(n);
   
  for (let i = 0; i < arrNum.length; i++) {
    arr.push(arrNum.slice(0, i) + arrNum.slice(i+1, arrNum.length));
  }
  let max = arr.reduce((acc, val) => {
    return acc > val ? acc : val;
});
return Number(max);
}
console.log(deleteDigit(1234))

module.exports = {
  deleteDigit
};
