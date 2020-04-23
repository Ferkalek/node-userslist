const express = require('express');

// next two line do not needed when we are using templater
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // when we work without templater
    res.render('add-product', {
        pageTitle: 'Add Product - page',
        path: '/add-product',
        activeAddProduct: true,
        formCss: true
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.router = router;
exports.products = products;