const controller = {};

controller.show = (req, res) => {
    const { categories, products } = require('../data');
    const id = req.query.id? parseInt(req.query.id) : -1;
    if (id !== -1) {
        const productList = products.filter((item) => item.category === id);
        res.render("task3", { categories: categories, products: productList });
    }
    else res.render("task3", { categories: categories, products: products });
}

module.exports = controller;