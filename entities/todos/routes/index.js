const express = require('express')

const allTodoController = require("../controller/showAllTodo")
const addTodoController = require("../controller/addTodoController")
const changeTodoController = require("../controller/changeTodoController")
const removeTodoController = require("../controller/removeTodoController")

const upload = require("../middleware/multerInit")
const router = express.Router()

router.route("/").get(allTodoController)
router.route("/add-todo").post(upload.single("taskImg"),addTodoController)
router.route("/change-todo").post(changeTodoController)
router.route("/remove-todo").post(removeTodoController)

module.exports = router