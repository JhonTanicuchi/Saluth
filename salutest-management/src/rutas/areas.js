const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/area.controller');
const {check_login} = require('../lib/auth');

rutas.get('/areas', mostrar);

module.exports = rutas;