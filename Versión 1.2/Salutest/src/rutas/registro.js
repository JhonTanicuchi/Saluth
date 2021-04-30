const express = require('express');
const rutas = express.Router();

const {mostrarRegistro,Registro,Login,logout,mostrarLogin} = require('../controllers/registro.controlador');

rutas.get('/login',mostrarLogin);

rutas.post('/login', Login);

rutas.get('/registro', mostrarRegistro);

rutas.post('/registro', Registro);

rutas.get('/logout', logout);


module.exports = rutas;