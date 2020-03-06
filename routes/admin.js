const express = require('express');
const adminCtrl = require('../controllers/admin');

const router = express.Router();

// /admin/products => GET
router.get('/products', adminCtrl.getProducts);

// /admin/add-product => GET
router.get('/add-product', adminCtrl.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminCtrl.postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminCtrl.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product', adminCtrl.postEditProduct);

// /admin/delete-product => DELETE
router.post('/delete-product', adminCtrl.postDeleteProduct);

module.exports = router;