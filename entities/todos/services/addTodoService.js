const todoModel = require("../../../database/models/todo")

module.exports = (username,taskName,imgPath)=>{

  console.log("user : ",username)
  console.log("todo ",taskName)
  console.log("img",imgPath)
  let todo ={
    username : username,
    taskName : taskName,
    img : imgPath,
    status : false
  }
  return todoModel.create(todo)
}