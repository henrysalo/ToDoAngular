const mongoose = require('mongoose');
const { Schema } = mongoose

const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    userId: {type: String, required: true},
    createdAt: {type: Date, required: true}
},
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Task', TaskSchema);