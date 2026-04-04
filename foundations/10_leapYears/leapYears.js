const leapYears = function (year) {
  // false if divisible 100 unless they are divisible by 400
  if (year % 100 === 0) {
    if (year % 400 === 0) return true;
    return false;
  }
  // true if divisible by 4.
  if (year % 4 === 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
