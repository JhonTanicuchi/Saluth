const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/job.controller');

rutas.get('/job', mostrar);

module.exports = rutas;