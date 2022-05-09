const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const person_rows = await sql.query(
        "SELECT * FROM usuario_businesses u join empleado_businesses e on u.id_usuario_business = e.id_empleado_business join personas p on e.personaIdPersona = p.id_persona join rols r on r.id_rol = u.rolIdRol WHERE u.username =?",
        [username]
      );
      if (person_rows.length > 0) {
        const user = person_rows[0];
        console.log(user.nombres_persona);

        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(
            null,
            user,
            req.flash("success", "Bienvenido" + user.nombres_persona)
          );
        } else {
          done(null, false, req.flash("message", "Contraseña incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe")
        );
      }
    }
  )
);


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
