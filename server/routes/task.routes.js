const routerTask = require('express').Router();

const taskCtrl = require('../controllers/task.controller')

routerTask.get('/:id', taskCtrl.getTasks);
routerTask.post('/', taskCtrl.createTask);
routerTask.put('/:id', taskCtrl.editTask)
routerTask.delete('/:id', taskCtrl.deleteTask)

module.exports = routerTask;
