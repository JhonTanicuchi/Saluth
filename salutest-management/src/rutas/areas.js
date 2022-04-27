const express = require("express");
const rutas = express.Router();

const areasController = require("../controllers/areas.controller");
const { check_login } = require("../lib/auth");

rutas.get("/areas", check_login, areasController.list);
rutas.post("/areas/add", check_login, areasController.save);

module.exports = rutas;
