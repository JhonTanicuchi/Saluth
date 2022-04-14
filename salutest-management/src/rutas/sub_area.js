const express = require('express');
const rutas = express.Router();

const sub_areaController = require('../controllers/sub_area.controller');
const {check_login} = require('../lib/auth');

rutas.get('/sub_area',check_login, sub_areaController.list);
rutas.post('/add',check_login, sub_areaController.save);

module.exports = rutas;