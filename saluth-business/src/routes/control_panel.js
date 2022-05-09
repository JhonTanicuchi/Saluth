const express = require('express');
const routes = express.Router ();

const { mostrar } = require("../controllers/control_panel.controller");
const { check_login } = require("../lib/auth");

routes.get("/control_panel",check_login, mostrar);

module.exports = routes;