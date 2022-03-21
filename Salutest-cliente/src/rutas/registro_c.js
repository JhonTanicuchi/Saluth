const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/registro_c.controller');
const {check_login} = require('../lib/auth');

rutas.get('/registro_c',check_login, mostrar);

module.exports = rutas;