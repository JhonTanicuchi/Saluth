const express = require('express');
const rutas = express.Router();

const registro_citasController = require("../controllers/registro_citas.controller");
const {check_login} = require('../lib/auth');

rutas.get("/registro_citas", check_login, registro_citasController.list);

module.exports = rutas;