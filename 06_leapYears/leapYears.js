const leapYears = function(year) {
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 300) {
      return false
    }
      return true
    } else if (year % 400 <= 396) {
        return true 
    } else {
      return false
    }
};
// Do not edit below this line
module.exports = leapYears;
