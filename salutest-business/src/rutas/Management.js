const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/Management.controller');
const { check_login } = require('../lib/auth');

rutas.get("/Management", check_login, mostrar);

module.exports = rutas;