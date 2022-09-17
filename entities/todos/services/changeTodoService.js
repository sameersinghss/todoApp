const todoModel =  require("../../../database/models/todo")

module.exports = (index)=>{
  console.log(index)
  return todoModel.findByIdAndUpdate(index,[{ $set: { status: { $not: "$status" } } }])
}