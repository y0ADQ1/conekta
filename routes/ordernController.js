const express = require('express');
const paymentRoutes = express.Router();
const { Order } = require('../db/models');
const fetch = require('node-fetch');

const CONEKTA_API_KEY = 'key_haP09l94SMVz5n1wzWzvDZj';
const API_URL = 'https://api.conekta.io/orders';

paymentRoutes.post('/crear', async (req, res) => {
    console.log("Datos recibidos en /crear:", req.body);

    const { totalPrice, deliveryAddress, token, cart } = req.body;

    if (!totalPrice || !deliveryAddress || !token || !cart) {
        return res.status(400).json({ error: 'Faltan datos para procesar el pago' });
    }

    try {
        console.log("Intentando crear la orden en Conekta...");

        const orderData = {
            currency: 'MXN',
            customer_info: {
                name: 'Cliente de Prueba',
                email: 'cliente@ejemplo.com',
                phone: '5555555555',
            },
            line_items: cart.map(item => ({
                name: item.name,
                quantity: 1,
                unit_price: Math.round(parseFloat(item.price) * 100),
            })),
            charges: [
                {
                    payment_method: {
                        type: 'card',
                        token_id: token,
                    },
                },
            ],
            pre_authorize: false,
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.conekta-v2.1.0+json',
                'Accept-Language': 'es',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(CONEKTA_API_KEY + ':').toString('base64')}`,
            },
            body: JSON.stringify(orderData),
        });

        const conektaOrder = await response.json();
        console.log("Respuesta de Conekta:", conektaOrder);

        if (!response.ok || !conektaOrder.id) {
            throw new Error(conektaOrder.details ? conektaOrder.details[0].message : "Error desconocido en Conekta");
        }

        await Order.create({
            totalPrice,
            deliveryAddress,
            paymentStatus: 'pagado',
            conektaOrderId: conektaOrder.id,
        });

        res.json({ success: true, message: 'Pago procesado exitosamente', order: conektaOrder });
    } catch (error) {
        console.error('Error detallado al procesar el pago:', error);
        res.status(500).json({
            error: 'Error al procesar el pago',
            details: error.message,
        });
    }
});

module.exports = paymentRoutes;
