const express = require('express');
const routes = express.Router();

const {check_login} = require('../lib/auth');
const specialtiesController = require("../controllers/specialties.controller");

routes.get("/specialties", check_login, specialtiesController.list);
routes.post("/specialties/save", check_login, specialtiesController.save);

module.exports = routes;