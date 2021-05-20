const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    Description:{
        type:String
    },
    Category: {
        type:String
    },
    Date: {
        type: Date
    }

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
