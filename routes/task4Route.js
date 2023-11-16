const express = require('express')
const router = express.Router()
const controller = require("../controllers/task4Controller.js")

router.get("/", controller.show);
router.get("/:name", controller.showDetails);

module.exports = router;
