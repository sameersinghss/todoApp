const todoModel = require("../../../database/models/todo")

module.exports = (username)=>{
  return todoModel.find({username : username})
}
