const express = require('express');
const rutas = express.Router();

const sucursales_medicasController = require('../controllers/sucursales_medicas.controller');
const {check_login} = require('../lib/auth');

rutas.get(
  "/sucursales_medicas",
  check_login,
  sucursales_medicasController.read
);

module.exports = rutas;