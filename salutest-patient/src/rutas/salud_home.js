const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/salud_home.controller');
const {check_login} = require('../lib/auth');

rutas.get('/salud_home',check_login, mostrar);

module.exports = rutas;