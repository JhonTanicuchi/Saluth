const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/vistaempleadosdb.controller');
const {check_login} = require('../lib/auth');

rutas.get('/vistaempleadosdb',mostrar);

module.exports = rutas;