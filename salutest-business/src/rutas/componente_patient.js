const express = require('express');
const rutas = express.Router();

const {check_login} = require('../lib/auth');
const componenteController = require("../controllers/componente_patient.controller");


rutas.get(
    "/componente_patient",
    check_login,
    componenteController.list
  );


module.exports = rutas;