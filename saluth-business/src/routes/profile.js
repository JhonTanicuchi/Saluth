const express = require('express');
const routes = express.Router();

const profileController = require('../controllers/profile.controller');
const {check_login} = require('../lib/auth');

routes.get("/profile/general", check_login, profileController.general);
routes.get("/profile/security", check_login, profileController.security);
routes.post("/profile/update/general/:id", check_login, profileController.update_general);
routes.post("/profile/update/credentials/:id", check_login, profileController.update_credentials);

module.exports = routes;