const router = require('express').Router();
const taskRouter = require('./tasks');

router.use('/tasks', taskRouter);

module.exports = router;