const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let arr1 = [];
  let res = [] //= new Array(arr.length);
  /*for (let i = 0; i < res.length; i++) {
    delete res[i];} */
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]=='-1') {
     arr1.push(i)  ///// индексы -1
    }
  }

  
  let arrSort = arr.sort();
  
 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      for (let k = 0; k < arrSort.length; k++) {
      
      if (arr1[j]==i) {res.push(-1); break; break} else {res.push(arrSort[k])}
  } } }

  return res;
  
}

arr = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(arr))


module.exports = {
  sortByHeight
};
