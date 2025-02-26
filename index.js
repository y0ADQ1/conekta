const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const { Sequelize } = require('sequelize');

const router = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Registrar rutas
app.use('/api/auth', router);

const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = sequelize;
