const express = require("express");
const routes = express.Router();

const { check_login } = require("../lib/auth");
const solicitudController = require("../controllers/solicitudes.controller");

routes.get("/solicitudes", check_login, solicitudController.list);
routes.get("/solicitudes/:id", check_login, solicitudController.read);
routes.get(
  "/solicitudes/approve/:id",
  check_login,
  solicitudController.approve
);
routes.get("/solicitudes/cancel/:id", check_login, solicitudController.cancel);

module.exports = routes;
