const express = require('express');
const router = express.Router();
const conekta = require('conekta');
const { Order } = require('../models');

conekta.Conekta.privateKey = process.env.CONEKTA_PRIVATE_KEY_TEST;

