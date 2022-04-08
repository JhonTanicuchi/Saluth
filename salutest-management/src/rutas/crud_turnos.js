const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/crud_turnos.controller');
<<<<<<< HEAD:salutest-admin/src/rutas/crud_turnos.js
const {check_login} = require('../lib/auth');
=======
const {check_login} = require("../lib/auth");
>>>>>>> ed6726e13d8878eed893a78bdf6f94117806ece3:salutest-management/src/rutas/crud_turnos.js

rutas.get('/crud_turnos', mostrar);

module.exports = rutas;