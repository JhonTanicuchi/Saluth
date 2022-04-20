const express = require('express');
const rutas = express.Router();

const { check_login } = require('../lib/auth');
const medicamentosController = require('../controllers/medicamentos.controller');

rutas.get('/medicamentos', check_login, medicamentosController.list);

module.exports = rutas;