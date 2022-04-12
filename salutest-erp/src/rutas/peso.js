const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/peso.controller');
const {check_login} = require('../lib/auth');

rutas.get('/peso',check_login, mostrar);

module.exports = rutas;