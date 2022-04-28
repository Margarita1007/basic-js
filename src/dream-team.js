const { NotImplementedError } = require('../extensions/index.js');

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
 function createDreamTeam(members) {
   try {
  if (typeof members != "object") {return false;}

  members = members.filter(a => (typeof a === "string"));
  for (let i=0; i < members.length; i++) {

    for (let j = 0; j < members[i].length; j++) {
          members[i] = members[i].replace(' ','')}
          members[i] = members[i][0].toUpperCase();
}


members = members.sort();
let password = members.join('');
 
  return password;}
  catch(e) 
  {return false}

}


module.exports = {
  createDreamTeam
};
