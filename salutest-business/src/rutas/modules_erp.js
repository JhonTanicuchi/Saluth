const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const modules_erpController = require("../controllers/modules_erp.controller");

rutas.get("/modules_erp", check_login, modules_erpController.list);

rutas.get("/modules_erp/:id", check_login, modules_erpController.list);

rutas.get(
  "/modules_patient/unlock/:id",
  check_login,
  modules_erpController.unlock
);

rutas.get(
  "/modules_erp/lock/:id",
  check_login,
  modules_erpController.lock
);

module.exports = rutas;