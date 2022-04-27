const express = require('express');
const rutas = express.Router();

const cita_medicaController = require('../controllers/cita_medica.controller');
const {check_login} = require('../lib/auth');

rutas.get('/cita_medica',check_login, cita_medicaController.list);
rutas.post("/cita_medica/add", cita_medicaController.save);
module.exports = rutas;