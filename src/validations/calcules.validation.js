const Joi = require('joi');

const getFactorial = {
  query: Joi.object().keys({
    number: Joi.number().integer(),
  }),
};

module.exports = {
  getFactorial,
};
