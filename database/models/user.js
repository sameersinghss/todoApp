const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username :{
    type : String,
    unique : true
  },
  password : String,
  name : String

})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel