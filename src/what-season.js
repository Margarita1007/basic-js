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
  
 // if (date == []) { return 'Unable to determine the time of year!'; }

 // if (Reflect.ownKeys(date).length > 1) {    throw new Error("Invalid date!");  }

 
try {

 
 
 //if ((date instanceof Date) == "false") {    throw new Error("Invalid date!");  }
  
switch (date.getMonth()) {
  case 11:
  case 0:    
  case 1:
    return "winter";

  case 2:
  case 3:    
  case 4:
    return "spring";


  case 5:
  case 6:    
  case 7:
    return "summer";  

  case 8:
  case 9:    
  case 10:
    return "autumn";      
  }
  
  
}




catch(e) {

 
  
  if (e.message.includes("is not a function")) {
    throw new Error("Invalid date!");
  } else {
    if (e.message.includes("read properties")) {
      return 'Unable to determine the time of year!';
  }


 }  
 
 //if ((typeof (Reflect.ownKeys(date)[0]) == 'string')) {    throw new Error("Invalid date!");  }
 if (Reflect.ownKeys(date).length > 1) {    throw new Error("Invalid date!");  }
 //if (Reflect.ownKeys(date).length > 8) {    throw new Error("Invalid date!");  }


}
}

module.exports = {
  getSeason
};
