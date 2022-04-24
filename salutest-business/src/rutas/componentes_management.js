const express = require('express');
const rutas = express.Router();

const {check_login} = require('../lib/auth');
const managementController = require("../controllers/componentes_management.controller");


rutas.get(
    "/componentes_management",
    check_login,
    managementController.list
  );
  
  rutas.get(
    "/componentes_management/default",
    check_login,
    managementController.list_default
  );

module.exports = rutas;