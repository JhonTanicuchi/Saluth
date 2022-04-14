const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/medicamentos.controller');
const { check_login } = require('../lib/auth');

rutas.get('/medicamentos',check_login, mostrar);

module.exports = rutas;