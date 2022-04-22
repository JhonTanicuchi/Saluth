const express = require('express');
const rutas = express.Router();

const {check_login} = require('../lib/auth');
const componenteController = require("../controllers/componentes_patient.controller");


rutas.get(
    "/componentes_patient",
    check_login,
    componenteController.list
  );

  
  rutas.get(
    "/componentes_patient/default",
    check_login,
    componenteController.list_default
  );

module.exports = rutas;