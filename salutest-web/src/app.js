const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyparser = require("body-parser");


const app = express();


/// archivos compartidos
app.set("port", process.env.PORT || 2000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "index",
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
app.use(
  session({
    secret: "Salutest",
    resave: false,
    saveUninitialized: false,
    
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
app.use(require("./rutas/index"));
app.use(require("./rutas/services"));
app.use(require("./rutas/job"));
/* app.use('/modules', require('./routes/inquiries')) */

module.exports = app;
