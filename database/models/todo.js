const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  username : String,
  taskName : String,
  img : String,
  status : Boolean
})

const todoModel = mongoose.model('userTodos',todoSchema,'userTodos')

module.exports = todoModel