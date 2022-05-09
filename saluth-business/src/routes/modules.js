const express = require("express");
const routes = express.Router();

const { check_login } = require("../lib/auth");
const modules_Controller = require("../controllers/modules.controller");

routes.get("/modules/form", check_login, modules_Controller.form);
routes.post("/modules/save", check_login, modules_Controller.save);
routes.get("/modules/:filter", check_login, modules_Controller.list);
routes.get("/modules/:filter/:type", check_login, modules_Controller.list);
routes.get("/modules/unlock/:id", check_login, modules_Controller.unlock);
routes.get("/modules/lock/:id", check_login, modules_Controller.lock);

module.exports = routes;
