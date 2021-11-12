/* eslint-disable no-param-reassign */
const httpStatus = require('http-status');

const { errors } = require('../utils/errors.constant');

const ApiError = require('../utils/ApiError');
const { calculesService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getFactorial = catchAsync(async (req, res) => {
  try {
    const { number } = req.query;
    if (number < 0) {
      throw new ApiError(httpStatus.NOT_ACCEPTABLE, errors.NEGATIVE_NUMBER);
    }
    const result = await calculesService.calculateFactorial(number);
    res.status(httpStatus.OK).send({ result });
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

module.exports = {
  getFactorial,
};
