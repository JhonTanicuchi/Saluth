const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/CRM.controller');
const { check_login } = require('../lib/auth');

rutas.get("/CRM", check_login, mostrar);

module.exports = rutas;