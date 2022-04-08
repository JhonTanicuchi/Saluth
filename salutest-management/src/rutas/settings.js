const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/settings.controller');
const {check_login} = require('../lib/auth');

rutas.get('/settings',check_login, mostrar);

module.exports = rutas;