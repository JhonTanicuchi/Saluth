const express = require('express');
const rutas = express.Router();

const componetes_erpController = require('../controllers/componentes_erp.controller');
const {check_login} = require('../lib/auth');

rutas.get(
    "/componentes_erp",
    check_login,
    componetes_erpController.list
  );

  
  rutas.get(
    "/componentes_erp/default",
    check_login,
    componetes_erpController.list_default
  );



module.exports = rutas;