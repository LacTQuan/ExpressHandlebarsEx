const controller = {};

controller.show = (req, res) => {
    const { emotions } = require("../data");
    res.render("task1", {emotions});
}

module.exports = controller;
