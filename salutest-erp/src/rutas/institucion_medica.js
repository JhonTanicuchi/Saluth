const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/institucion_medica.controller');
const {check_login} = require('../lib/auth');

rutas.get('/institucion_medica',check_login, mostrar);
rutas.post("/add", check_login, mostrar);

module.exports = rutas;