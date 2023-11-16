const controller = {};

controller.show = (req, res) => {
    const { zodiacs } = require("../data");
    res.render("task4", {zodiacs});
}

controller.showDetails = (req, res) => {
    const name = req.params.name;
    const { zodiacs } = require("../data");
    const result = zodiacs.filter((item) => item.name == name)[0];

    res.render("task4-details", {zodiacs: result});
}

module.exports = controller;
