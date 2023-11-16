const express = require('express')
const router = express.Router()
const controller = require("../controllers/task2Controller.js")

router.get("/", controller.show);

module.exports = router;