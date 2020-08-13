const router = require('express').Router();
const taskService = require('../../services/tasks');

router.post('/', (req, res) => {
    const newTask = req.body;
    taskService.add(newTask);
    return res.sendStatus(201);
});

router.put('/:id', (req, res) => {
    const raskId = req.params.id;
    const task = req.body;
    if (taskService.update(raskId, task)) {
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
