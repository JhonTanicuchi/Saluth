const express = require("express");
const routes = express.Router();

const medical_institutionsController = require("../controllers/medical_institutions.controller");
const { check_login } = require("../lib/auth");

routes.get(
  "/medical_institutions",
  check_login,
  medical_institutionsController.list
);

routes.get(
  "/medical_institutions/:filter",
  check_login,
  medical_institutionsController.list
);

module.exports = routes;
