const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  const chislit = Math.log(MODERN_ACTIVITY/sampleActivity);
  const znam = (0.693/HALF_LIFE_PERIOD);
  let time = Math.ceil(chislit/znam);
  
  
let adequate;

  if ((MODERN_ACTIVITY - sampleActivity > 0) && (MODERN_ACTIVITY - sampleActivity < 15)) {
    adequate = true;
  }

  if ((Number(sampleActivity) && (typeof sampleActivity === "string")) && (adequate)) {
    return time;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
