const express = require('express');
const rutas = express.Router();

const componenteController = require('../controllers/componente.controller');
const {check_login} = require('../lib/auth');

rutas.get('/componente',check_login, componenteController.mostrar);
rutas.post('/add',check_login, componenteController.save);

module.exports = rutas;