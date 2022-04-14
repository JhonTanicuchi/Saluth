const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/medicamentos.controller');
const { check_login } = require('../lib/auth');

rutas.get('/medicamentos', mostrar);

module.exports = rutas;