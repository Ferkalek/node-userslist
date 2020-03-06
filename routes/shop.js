const express = require('express');
const shopCtrl = require('../controllers/shop');

const route = express.Router();

route.get('/', shopCtrl.getIndex);

route.get('/products', shopCtrl.getProducts);

route.get('/products/:productId', shopCtrl.getProduct);

route.get('/cart', shopCtrl.getCart);

route.post('/cart', shopCtrl.addToCart);

route.get('/orders', shopCtrl.getOrders);

route.get('/checkout', shopCtrl.getCheckout);

module.exports = route;