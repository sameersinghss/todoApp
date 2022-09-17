const userRoute = require("./users/routes")
const todoRoute = require("./todos/routes")
 
module.exports = (app)=>{
  app.use("/user",userRoute)
  app.use("/todos",todoRoute)
}