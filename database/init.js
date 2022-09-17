const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const uri = process.env.DB

module.exports = ()=>{
  return mongoose.connect(uri)
}