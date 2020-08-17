const router = require('express').Router();
const { validationResult } = require('express-validator');

const taskService = require('../../services/tasks');
const { urlParamValidator, taskValidator} = require('./validators');

router.post('/', taskValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newTask = req.body;
    taskService.add(newTask);
    return res.sendStatus(201);
});

router.put('/:id', urlParamValidator, taskValidator, (req, res) => {
    const taskId = req.params.id;
    const task = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (taskService.update(taskId, task)) {
      return res.sendStatus(200);
    }
    return res.sendStatus(204);
});

router.get('/', (req, res) => {
    const taskList = taskService.getTasks();
    return res.json(taskList);
});

router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = taskService.getTask(taskId);
    if (task) {
        return res.json(task);
    }
    return res.sendStatus(404);
});

router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = taskService.delete(taskId);
    if (task) {
        return res.sendStatus(200);
    }
    return res.sendStatus(404);
});

module.exports = router;
