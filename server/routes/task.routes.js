const { Router } = require('express');
const routerTask = Router();

const taskCtrl = require('../controllers/task.controller')

//Nombro las rutas
routerTask.get('/:id', taskCtrl.getTasks);
routerTask.post('/', taskCtrl.createTask);
routerTask.put('/:id', taskCtrl.editTask)
routerTask.delete('/:id', taskCtrl.deleteTask)

module.exports = routerTask;
