const removeTodoService = require("../services/removeTodoService")

module.exports = (req,res)=>{
  removeTodoService(req.body.itemToRemove).then((obj)=>{
    console.log("Todo removed  : ", obj)
    res.redirect("/todos/")
  })
  .catch((err)=>{
    res.redirect("/logout")
  })
}