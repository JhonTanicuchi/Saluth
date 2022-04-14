const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/sala.controller');
const {check_login} = require('../lib/auth');

rutas.get('/sala',check_login, mostrar);

module.exports = rutas;