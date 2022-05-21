const express = require("express");
const routes = express.Router();

const { mostrar } = require("../controllers/menu_apps.controller");

routes.get("/menu_apps", mostrar);

module.exports = routes;
