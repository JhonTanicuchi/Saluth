const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/listacitamedica.controller');
const {check_login} = require('../lib/auth');

rutas.get('/listacitamedica',check_login,mostrar);

module.exports = rutas;