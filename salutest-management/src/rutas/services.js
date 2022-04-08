const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/services.controller');

rutas.get('/services', mostrar);

module.exports = rutas;