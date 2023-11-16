const controller = {};

controller.show = (req, res) => {
    const salary = req.query.salary? parseFloat(req.query.salary) : 0;
    res.render("task2", {jar55: (salary * 0.55).toFixed(2), jar10: (salary * 0.1).toFixed(2), jar5: (salary * 0.05).toFixed(2)});
}

module.exports = controller;
