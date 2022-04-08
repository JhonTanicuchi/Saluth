const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/especialidades.controller');
const {check_login} = require('../lib/auth');

rutas.get('/especialidades',mostrar);

module.exports = rutas;