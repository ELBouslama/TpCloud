/* eslint-disable prefer-const */
const sFact = require('../utils/mathFact');

const calculateFactorial = async (number) => {
  let factNumber = sFact(number);
  return factNumber;
};

module.exports = {
  calculateFactorial,
};
