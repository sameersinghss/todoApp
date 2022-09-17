const allTodoServices = require("../services/allTodoService")

module.exports = (req,res)=>{
  allTodoServices(req.session.username).then((obj)=>{
    console.log("Obj : [at showAllTodos.js] : ",obj)
    res.render("home",{
      activeUser : req.session.UName,
      definedControl : "Logout",
      allTodosforUser : obj
    })
  })
}