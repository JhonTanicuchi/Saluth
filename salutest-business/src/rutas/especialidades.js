const express = require('express');
const rutas = express.Router();

const {check_login} = require('../lib/auth');
const especialidadesController = require("../controllers/especialidades.controller");

rutas.get('/especialidades',check_login, especialidadesController.list);
rutas.post("/add", check_login,especialidadesController.save);

module.exports = rutas;