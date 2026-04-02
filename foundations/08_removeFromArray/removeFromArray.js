const removeFromArray = function () {
  console.log(`arg[0]=${arguments[0]}`);
  for (let i = 1; i < arguments.length; i++) {
    arguments[0] = arguments[0].filter(elem => elem !== arguments[i]);
    console.log(`after filter:${arguments[0]}`);
  }
  return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
