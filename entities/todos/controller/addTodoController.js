const todoService = require('../services/addTodoService')

module.exports = (req,res)=>{
  todoService(req.session.username,req.body.taskName,req.file.filename).then((obj)=>{
    console.log("Todo Added")
    console.log(obj)
    res.redirect("/todos/")
  })
  .catch((err)=>{
    console.log("Error",err)
  })
}