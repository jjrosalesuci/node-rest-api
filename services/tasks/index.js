class TaskService {
    constructor() {
        this.tasks = [];
    }

    add (task) {
        this.tasks.push(task);
    }

    update (taskId, task) {
        let taskIndex = this.tasks.findIndex(taskCursor => taskCursor.id == taskId);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex , 1, task);
            return true;
        }
        return false;
    }
    
    delete (taskId) {
        const taskIndex = this.tasks.findIndex(taskCursor => taskCursor.id == taskId);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex , 1);
            return true;
        }
        return false;
    }

    getTasks () {
        return this.tasks;
    }

    getTask (taskId) {
        return this.tasks.find(taskCursor => taskCursor.id == taskId);
    }
}

module.exports = new TaskService;