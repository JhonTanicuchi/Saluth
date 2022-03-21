const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/login.controller');
const {check_login} = require('../lib/auth');

rutas.get('/home',check_login, mostrar);

module.exports = rutas;