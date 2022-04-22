const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/componentes_management.controller');
const {check_login} = require('../lib/auth');

rutas.get('/componentes_management',check_login, mostrar);



module.exports = rutas;