const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/ERP.controller');
const { check_login } = require('../lib/auth');

rutas.get("/ERP", check_login, mostrar);

module.exports = rutas;