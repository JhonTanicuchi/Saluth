const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/horarios.controller');
const {check_login} = require('../lib/auth');

rutas.get('/horarios', mostrar);

module.exports = rutas;