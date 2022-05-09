const express = require('express');
const routes = express.Router();

const {mostrar} = require('../controllers/profile.controller');
const {check_login} = require('../lib/auth');

routes.get('/profile',check_login, mostrar);

module.exports = routes;