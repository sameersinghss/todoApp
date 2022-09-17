const express = require('express')
const loginController = require("../controllers/loginController")
const signupController = require("../controllers/signupController")

const router = express.Router()

router.route("/login").get(loginController.getReq)
.post(loginController.postReq)

router.route("/signup").get(signupController.getSignup)
.post(signupController.postSignup)

module.exports = router