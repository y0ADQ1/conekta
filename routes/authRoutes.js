const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');
const { addToCart } = require('../controllers/productController');

// Rutas de API
/**
 * @swagger
 * /api/auth/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Retorna una lista de productos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *       400:
 *         description: Solicitud incorrecta
 */
router.get('/products', getAllProducts);


router.post('/products', addToCart);

module.exports = router;
