const express = require('express');
const rutas = express.Router();

const sub_areaController = require('../controllers/sub_areas.controller');
const {check_login} = require('../lib/auth');

rutas.get("/sub_areas", check_login, sub_areaController.list);
rutas.post("/sub_areas/add", check_login, sub_areaController.save);

module.exports = rutas;