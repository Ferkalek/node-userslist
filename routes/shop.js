const express = require('express');

// next two line do not needed when we are using templater
const path = require('path');
const rootDir = require('../utils/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const { products } = adminData;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // when we work without templater
    res.render('shop', {
        pageTitle: 'Products - page',
        text: 'There is any product',
        prods: products,
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productsCss: true
    });
});

module.exports = router;