const express = require('express');
const rutas = express.Router();

const areaController = require('../controllers/area.controller');
const {check_login} = require('../lib/auth');

rutas.get('/area',check_login, areaController.mostrar);
rutas.post('/add',check_login, areaController.save);

module.exports = rutas;