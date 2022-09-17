const userSignup = require("../services/signupService")

module.exports.getSignup = (req,res)=>{
    res.render("signup")
}

module.exports.postSignup= (req,res)=>{
  let uname = req.body.username
  let pwd = req.body.password
  let name = req.body.userName
    
  console.log("Here..... I am")
  userSignup(uname,pwd,name).then((obj)=>{
    console.log("Success")
    console.log(obj)
    res.redirect("/user/login")
  })
  .catch((err)=>{
    console.log(err)
  })
}