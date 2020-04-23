const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const { products } = adminData;
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