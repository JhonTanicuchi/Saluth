const express = require('express');
const rutas = express.Router();

const moduleController = require("../controllers/module.controller");
const {check_login} = require('../lib/auth');

rutas.get("/module", check_login, moduleController.mostrar);
rutas.post("/module/add", check_login, moduleController.save);

module.exports = rutas;