const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/modulos_erp.controller');
const {check_login} = require('../lib/auth');

rutas.get('/modulos_erp',check_login, mostrar);



module.exports = rutas;