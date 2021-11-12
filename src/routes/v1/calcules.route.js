const express = require('express');

const validate = require('../../middlewares/validate');
const calculesValidation = require('../../validations/calcules.validation');
const { calculesController } = require('../../controllers');

const router = express.Router();

router.get('/factorial', validate(calculesValidation.getFactorial), calculesController.getFactorial);

module.exports = router;
