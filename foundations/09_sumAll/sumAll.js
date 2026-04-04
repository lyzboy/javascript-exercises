const sumAll = function (a, b) {
  // catch all restrictions
  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) return "ERROR";
  // ensure are range is from lowest to highest number
  return Array.from(
    { length: Math.abs(Math.ceil((a - b))) + 1 },
    (_, i) => a < b ? a + i : b + i,
  ).reduce((acc, curr) => acc + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;
