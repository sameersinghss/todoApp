const userLogin = require("../services/loginService")

module.exports.postReq=(req,res)=>{
  let username = req.body.username
  let password = req.body.password

  userLogin(username).then((user)=>{
    console.log('user==',user)
    if(user)
    {
      if(user.password === password){
        req.session.isAuthenticated = true
        req.session.username = username
        req.session.UName = user.name

        res.redirect("/todos/")
        return
      }
      res.render("login",{err : "Wrong password"})
      return
    }

    res.render("login",{err : "User Not Found"})
  })
}

module.exports.getReq = (req,res)=>{
  if(req.session.isAuthenticated)
  {
    res.redirect("/todos/")
  }
  else
  {
    res.render("login",{err : ""})
  }
}