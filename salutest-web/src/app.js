const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const passport = require("passport");
const flash = require("connect-flash");
const bodyparser = require("body-parser");


const app = express();


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



//midlewars


//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routers
app.use(require("./rutas/index"));

/* app.use('/modules', require('./routes/inquiries')) */

module.exports = app;
