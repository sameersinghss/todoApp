const todoModel =  require("../../../database/models/todo")

module.exports = (index)=>{
  console.log(index)
  return todoModel.findByIdAndRemove(index)
}