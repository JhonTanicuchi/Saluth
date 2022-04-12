const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/roles.controller');
const {check_login} = require('../lib/auth');

rutas.get('/roles',mostrar);

module.exports = rutas;