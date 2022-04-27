const express = require('express');
const rutas = express.Router();

const empleadosController = require('../controllers/empleados.controller');
const {check_login} = require('../lib/auth');

rutas.get('/empleados',check_login, empleadosController.list);
rutas.post("/empleados/add", check_login, empleadosController.save);

module.exports = rutas;