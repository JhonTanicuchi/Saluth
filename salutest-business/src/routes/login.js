const express = require('express');
const routes = express.Router();

const loginController = require('../controllers/login.controller');
const {check_notlogin} = require('../lib/auth');


routes.get("/", check_notlogin, loginController.show_login);

routes.post("/", loginController.login);

routes.get("/logout", loginController.logout);


module.exports = routes;