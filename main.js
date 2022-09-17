const express = require("express")

const app = express()
const session = require("express-session")
const port = 3000

const initMongoose = require("./database/init")
const entities = require("./entities")

app.set('view engine', 'ejs')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"))
app.use(express.json())

app.use((req, res, next) => {
    if (req.url !== '/user/login'
        && req.url !== '/user/signup') {
        if (req.session.isAuthenticated) {
            next()
        }
        else {
            res.redirect("/user/login")
        }
        return
    }
    next()
})


app.get("/", (req, res) => {
    if(req.session.isAuthenticated){
    res.render("home",{
        activeUser : req.session.UName,
        definedControl : "Logout",
        allTodosforUser : []
    })
    return 
    }
    res.redirect("/user/login")
})

app.get("/logout", (req, res) => {
    req.session.isAuthenticated = false
    req.session.UName = ""
    req.session.username = ""
    res.redirect("/user/login")
})

initMongoose().then(()=>{
    console.log("db connected")
    entities(app)
    app.listen(port,()=>{
        console.log(`App listening at port ${port}`)
    })
})
.catch((err)=>{
    console.log("error",err)
})