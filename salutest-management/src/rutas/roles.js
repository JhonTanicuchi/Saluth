const express = require("express");
const rutas = express.Router();

const { check_login } = require('../lib/auth');
const rolesController = require('../controllers/roles.controller');

rutas.get('/roles', check_login, rolesController.list);

module.exports = rutas;