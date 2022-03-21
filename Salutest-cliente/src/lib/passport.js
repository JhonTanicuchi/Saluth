const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database");
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const rows = await pool.query("SELECT * FROM paciente WHERE username=?",[username]);
      if (rows.length>0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Bienvenido" + user.username));
        } else {
          done(null, false, req.flash("message", "Contraseña incorrecta"));
        }
      } else {
        return done(null, false, req.flash("message", "El nombre de usuario no existe")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const {cedula,nombre,apellido,correo} = req.body;
      let newUser = {
        cedula,
        nombre,
        apellido,
        correo,
        username,
        password
      };

      newUser.password = await helpers.encryptPassword(password);
      // Guardar en la base de datos
      const result = await pool.query("INSERT INTO paciente SET ? ", newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM paciente WHERE id = ?", [id]);
  done(null, rows[0]);
});
