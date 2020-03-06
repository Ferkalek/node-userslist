const express = require('express');
// const path = require('path');
// const rootDir = require('../utils/path');

const adminData = require('./admin');

const route = express.Router();

route.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        docTitle: 'Shoping Page',
        hasProducts: products.length > 0,
        isHomeStyles: true,
        isHomePage: true,
    });
});

module.exports = route;