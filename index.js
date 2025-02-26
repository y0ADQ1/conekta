require('dotenv').config();
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');
const swaggerspect ={
    dfinition:{
        openapi: "3.0.0",
        info: {
            title: "API REST",
            version: "1.0.0",
            description: "API REST"
    },
    servers: [
        {
            url: "http://localhost:8084"
        }
    ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument(swaggerspect)));

const PORT = process.env.PORT || 8084;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
