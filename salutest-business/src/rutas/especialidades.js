const express = require('express');
const rutas = express.Router();

const {check_login} = require('../lib/auth');
const especialidadesController = require("../controllers/especialidades.controller");

rutas.get('/especialidades',check_login, especialidadesController.list);
rutas.get("/especialidades",check_login, especialidadesController.mostrar);
rutas.post("/add",especialidadesController.save);

module.exports = rutas;