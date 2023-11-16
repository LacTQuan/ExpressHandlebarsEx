const express = require('express')
const router = express.Router()
const controller = require("../controllers/task1Controller.js")

router.get("/", controller.show);

module.exports = router;
