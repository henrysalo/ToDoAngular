const Task = require('../model/task')
const taskCtrl = {};

taskCtrl.getTasks = async (req, res)=>{
    const { id } = req.params
    const task = await Task.find({userId: id})
    res.json(task)
}

taskCtrl.createTask = async (req, res)=>{
    const task = new Task(req.body);
    await task.save();
    res.json({
        'status': 'Task saved'
    })
}

taskCtrl.editTask = async (req, res)=>{
    const { id } = req.params
    const task = {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
        createdAt: req.body.createdAt
    }
    await Task.findByIdAndUpdate( id , {$set:task}, {new: true})
    res.json({
        status: 'Task Update'
    })
}

taskCtrl.deleteTask = async (req, res)=>{
    await Task.findByIdAndRemove(req.params.id)
    res.json({
        status : 'Task Deleted'
    })
}

module.exports = taskCtrl;