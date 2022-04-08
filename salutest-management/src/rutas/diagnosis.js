const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/diagnosis.controller');
const {check_login} = require('../lib/auth');

rutas.get('/diagnosis',check_login, mostrar);

module.exports = rutas;