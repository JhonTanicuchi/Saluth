const express = require('express');
const routes = express.Router();

const medical_branchController = require("../controllers/medical_branch.controller");
const {check_login} = require('../lib/auth');

routes.get("/medical_branch/:id", check_login, medical_branchController.read);

module.exports = routes;