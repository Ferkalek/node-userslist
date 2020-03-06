const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            docTitle: 'Shoping Page',
            path: '/'
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'Product List Page',
            path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            prod: product,
            docTitle: 'Product title',
            path: '/products'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: 'Cart Page',
        path: '/cart'
    });
};

exports.addToCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: 'Checkout Page',
        path: '/checkout'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        docTitle: 'Order page',
        path: '/orders'
    });
};