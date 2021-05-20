const Task = require("../models/task");

module.exports.title = function(req,res){
     Task.find({},function(err,tasks){
        if(err){
            console.log("error in finding the task",err);
            return;
        }
        // console.log(tasks);
    return res.render("to_do",{
        title: "Check",
        tasks: tasks
    });
    });
    
}

module.exports.createTask = function(req,res){
Task.create(req.body,function(err){
    if(err){
        console.log("error in creating task", err);
        return;
    }
    console.log("task created");
    return res.redirect("back");
});

}

module.exports.deleteTask = function(req,res){
    //  /deletetask/?id0=&id1=
    let ids = new Array();
    console.log(req.query);
    for(let i in req.query){
        ids.push(req.query[i]);
    }
    Task.deleteMany({_id:{$in:ids}},function(err){
        if(err){
            console.log("Task cannot be deleted",err);
        }
        return res.redirect("back");
    })
}