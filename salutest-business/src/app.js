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
app.use(require("./rutas/sucursales_medicas"));
app.use(require("./rutas/general_configuration"));
app.use(require("./rutas/modules_erp"));
app.use(require("./rutas/modulos_erp"));
app.use(require("./rutas/componentes_patient"));
app.use(require("./rutas/modules_management"));
app.use(require("./rutas/modulo_componentes"));
app.use(require("./rutas/module_management"));
app.use(require("./rutas/modulo_estadisticas"));
app.use(require("./rutas/componente"));
app.use(require("./rutas/CRM"));
app.use(require("./rutas/ERP"));
app.use(require("./rutas/Patient"));
app.use(require("./rutas/Management"));

module.exports = app;