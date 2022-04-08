const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/crud_turnos.controller');
const {check_login} = require("../lib/auth");

rutas.get('/crud_turnos',check_login, mostrar);

module.exports = rutas;