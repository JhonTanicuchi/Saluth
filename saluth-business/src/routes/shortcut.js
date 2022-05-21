const express = require('express');
const routes = express.Router();

const {check_login} = require('../lib/auth');
const shorcutController = require("../controllers/shortcut.controller");

routes.post("/shortcut/link", check_login, shorcutController.link);
routes.get("/shortcut/unlink/:id", check_login, shorcutController.unlink);

module.exports = routes;