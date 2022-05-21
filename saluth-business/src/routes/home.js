const express = require('express');
const routes = express.Router();

const homeController = require('../controllers/home.controller');
const {check_login} = require('../lib/auth');

routes.get("/home", check_login, homeController.mostrar);

module.exports = routes;