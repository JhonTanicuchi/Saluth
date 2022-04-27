const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");

const { database } = require("./keys");

const app = express();
const orm = require("./config-database/database.orm");
const sql = require("./config-database/database.sql");


/// archivos compartidos
app.set("port", process.env.PORT || 1000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

/// archivos compartidos

//midlewars
app.use(morgan("dev"));
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use(bodyparser.json());

//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routers
app.use(require("./rutas/index"));
app.use(require("./rutas/solicitud"));

module.exports = app;
