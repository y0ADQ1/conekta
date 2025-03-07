const { Product } = require('../db/models');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

const addToCart = (req, res) => {
    const { id, name, price } = req.body;

    if (!id || !name || !price) {
        return res.status(400).json({ error: 'Faltan datos del producto' });
    }

    console.log(`Producto agregado al carrito: ${name} (${id}) - $${price}`);

    res.json({ message: 'Producto añadido al carrito', product: { id, name, price } });
};

module.exports = { getAllProducts, addToCart };
