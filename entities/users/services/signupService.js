const userModel = require("../../../database/models/user")

module.exports = (username,password,name)=>{
  let user = {
    username : username,
    password : password,
    name : name
  }
  return userModel.create(user)
}