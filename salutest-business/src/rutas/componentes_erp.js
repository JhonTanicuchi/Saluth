const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/componentes_erp.controller');
const {check_login} = require('../lib/auth');

rutas.get('/componentes_erp',check_login, mostrar);



module.exports = rutas;