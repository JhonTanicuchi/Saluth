const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/clinic_history.controller');
const {check_login} = require('../lib/auth');

rutas.get("/clinic_history", check_login, mostrar);

module.exports = rutas;