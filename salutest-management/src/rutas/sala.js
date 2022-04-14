const express = require('express');
const rutas = express.Router();

const salaController = require('../controllers/sala.controller');
const {check_login} = require('../lib/auth');

rutas.get('/sala',check_login, salaController.list);
rutas.post('/add',check_login, salaController.save);

module.exports = rutas;