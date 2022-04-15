const express = require('express');
const rutas = express.Router();

const instituciones_medicasController = require('../controllers/instituciones_medicas.controller');
const {check_login} = require('../lib/auth');

rutas.get(
  "/instituciones_medicas",
  check_login,
  instituciones_medicasController.list
);

module.exports = rutas;