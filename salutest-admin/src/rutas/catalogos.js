const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/catalogos.controller');
const {check_login} = require('../lib/auth');

rutas.get('/catalogos',check_login, mostrar);

module.exports = rutas;