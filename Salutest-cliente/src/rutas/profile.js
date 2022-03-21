const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/profile.controller');
const {check_login} = require('../lib/auth');

rutas.get('/profile',check_login, mostrar);



module.exports = rutas;