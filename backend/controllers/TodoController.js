const async = require('hbs/lib/async')
const todoModel = require('../models/Todomodel')
const { json } = require('stream/consumers')

module.exports.getTodo = async (req,res)=>{
    const toDo =await todoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async(req,res)=>{
    const {text} = req.body
    todoModel.create({text})
    .then((data)=>{
        console.log("Task added successfully...");
        console.log(data);
        res.send(data)
    })
}


module.exports.updateTodo = async (req,res)=>{
    const {_id , text} = req.body
    todoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("Updated successfully")
    }).catch((err)=> console.log(err));
}

module.exports.deleteTodo = async (req,res)=>{
    const {_id } = req.body
    todoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.send("Deleted successfully")
    }).catch((err)=> console.log(err))    
}