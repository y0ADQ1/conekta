const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');
const { addToCart } = require('../controllers/productController');

// Rutas de API
router.get('/products', getAllProducts);
router.post('/products', addToCart);

module.exports = router;
