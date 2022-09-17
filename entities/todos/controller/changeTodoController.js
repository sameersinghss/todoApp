const todoService = require("../services/changeTodoService")

module.exports = (req,res)=>{
  todoService(req.body.itemChanged).then((obj)=>{
    console.log("Todo Changed : ",obj)
    res.redirect("/todos/")
  })
}