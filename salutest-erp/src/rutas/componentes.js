const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/componentes.controller');
const {check_login} = require('../lib/auth');

rutas.get('/componentes',check_login, mostrar);

module.exports = rutas;