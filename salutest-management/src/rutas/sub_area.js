const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/sub_area.controller');
const {check_login} = require('../lib/auth');

rutas.get('/sub_area',check_login, mostrar);

module.exports = rutas;