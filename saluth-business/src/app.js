const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyparser = require("body-parser");
const navegationController = require("./controllers/navegation.controller");

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
    secret: "Saluth",
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads/profile'),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});
app.use(multer({ storage: storage }).single("avatar_img"));
//midlewars

//varible globales
app.use((req, res, next) => {
  app.locals.success = req.flash("success");
  app.locals.message = req.flash("message");
  app.locals.user = req.user;
  next();
});
app.use(navegationController.nav);
//varible globales

//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routers
app.use(require("./routes/login"));
app.use(require("./routes/profile"));
app.use(require("./routes/settings"));
app.use(require("./routes/home"));
app.use(require("./routes/control_panel"));
app.use(require("./routes/specialties"));
app.use(require("./routes/solicitudes"));
app.use(require("./routes/medical_institutions"));
app.use(require("./routes/medical_branch"));
app.use(require("./routes/menu_apps"));
app.use(require("./routes/modules"));
app.use(require("./routes/shortcut"));

app.use((req, res, next) => {
  res.status(404).render("404", { title404: "404" });
});
module.exports = app;
