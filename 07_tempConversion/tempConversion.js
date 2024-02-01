const convertToCelsius = function(fahrenheit) {
  let calculation = ((fahrenheit - 32) * 5) / 9;
  if (Number.isInteger(calculation) === false) {
    return Number(calculation.toFixed(1));
  } else {
    return calculation;
  }
};

const convertToFahrenheit = function(celsius) {
  const calculation = ((celsius * 9) / 5) + 32;
  if (Number.isInteger(calculation) === false) {
    return Number(calculation.toFixed(1));
  } else {
    return calculation;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
