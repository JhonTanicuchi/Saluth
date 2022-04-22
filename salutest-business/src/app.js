const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyparser = require("body-parser");

const { database } = require("./keys");

const app = express();
require("./lib/passport");

/// archivos compartidos
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpres: require("./lib/handlebars"),
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
app.use(
  session({
    secret: "Salutest_Business",
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales
app.use((req, res, next) => {
  app.locals.success = req.flash("success");
  app.locals.message = req.flash("message");
  app.locals.user = req.user;
  next();
});
//varible globales

//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routers
app.use(require("./rutas/registro"));
app.use(require("./rutas/login"));
app.use(require("./rutas/profile"));
app.use(require("./rutas/settings"));
app.use(require("./rutas/especialidades"));
app.use(require("./rutas/solicitudes"));
app.use(require("./rutas/solicitudes_componentes"));
app.use(require("./rutas/instituciones_medicas"));
app.use(require("./rutas/general_configuration"));
<<<<<<< HEAD
=======
<<<<<<< HEAD
app.use(require("./rutas/componente_patient"))
=======
<<<<<<< HEAD
>>>>>>> afe311351d81b8f3bb31b75534faf8d9a80e4d3b
app.use(require("./rutas/componentes_management"));
>>>>>>> bde9d3ed817a7ab039afc08a3d7466f08674c1ac

module.exports = app;
