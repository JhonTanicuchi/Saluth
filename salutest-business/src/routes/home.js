const express = require('express');
const routes = express.Router();

const {mostrar} = require('../controllers/home.controller');
const {check_login} = require('../lib/auth');

routes.get('/home',check_login, mostrar);

module.exports = routes;