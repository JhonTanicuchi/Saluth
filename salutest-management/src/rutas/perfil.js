const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/perfil.controller');
const {check_login} = require('../lib/auth');

rutas.get('/perfil', mostrar);

module.exports = rutas;