const express = require('express');
const rutas = express.Router();

const salaController = require('../controllers/salas.controller');
const {check_login} = require('../lib/auth');

rutas.get('/salas',check_login, salaController.list);
rutas.post("/salas/add", check_login, salaController.save);

module.exports = rutas;