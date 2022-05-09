const express = require('express');
const routes = express.Router();

const {mostrar} = require('../controllers/settings.controller');
const {check_login} = require('../lib/auth');

routes.get('/settings',check_login, mostrar);

module.exports = routes;