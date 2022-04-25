const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const modules_managementController = require("../controllers/module_management.controller");

rutas.get("/modules_management", check_login, modules_managementController.list);

rutas.get("/modules_management/:id", check_login, modules_managementController.list);

rutas.get(
  "/modules_management/unlock/:id",
  check_login,
  modules_managementController.unlock
);

rutas.get(
  "/modules_management/lock/:id",
  check_login,
  modules_managementController.lock
);

module.exports = rutas;
