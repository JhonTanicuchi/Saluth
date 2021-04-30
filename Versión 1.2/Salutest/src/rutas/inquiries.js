const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/inquiries.controller');
const {check_login} = require('../lib/auth');

rutas.get('/inquiries',check_login, mostrar);

module.exports = rutas;