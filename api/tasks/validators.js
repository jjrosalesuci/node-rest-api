const { body, checkSchema } = require('express-validator');

const urlParamValidator = checkSchema({
    id: {
        in: ['params', 'query'],
        errorMessage: 'ID is wrong',
        isInt: true,
        toInt: true
    }
});

const taskValidator = [
    body('id').isDecimal(),
    body('name').isLength({ min: 5 }).trim()
];

module.exports = {
    urlParamValidator,
    taskValidator
};
