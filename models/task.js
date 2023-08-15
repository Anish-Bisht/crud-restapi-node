const mong = require('mongoose');


const  TaskSchema = new mong.Schema({
    title : {
        type : String,
        required: true,
    },
    description: {
        type : String,
        
    }
});

 const Task = mong.model('Task',TaskSchema);
 module.exports = Task;