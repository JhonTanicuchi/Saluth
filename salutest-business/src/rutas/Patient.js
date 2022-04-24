const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/Patient.controller');
const { check_login } = require('../lib/auth');

rutas.get("/Patient", check_login, mostrar);

module.exports = rutas;