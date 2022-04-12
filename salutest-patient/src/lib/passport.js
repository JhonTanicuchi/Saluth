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
      const rows = await orm.usuario_paciente.findOne({
        where: { username: username },
      });
      if (rows) {
        const user = rows;
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(
            null,
            user,
            req.flash("message", "Bienvenido" + " " + user.username)
          );
        } else {
          done(null, false, req.flash("message", "Datos incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe.")
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
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const usuario_paciente = await orm.usuario_paciente.findOne({
        where: { username: username },
      });
      if (usuario_paciente === null) {
        const { fecha_creacion, correo } = req.body;
        let nuevoUsuario = {
          username,
          password,
          correo,
          fecha_creacion,
        };
        nuevoUsuario.password = await helpers.encryptPassword(password);
        const resultado = await orm.usuario_paciente.create(nuevoUsuario);
        nuevoUsuario.id = resultado.insertId;
        return done(null, nuevoUsuario);
      } else {
        if (usuario_paciente) {
          const usuario = usuario_paciente;
          if (username == usuario.username) {
            done(
              null,
              false,
              req.flash("message", "El nombre de usuario ya existe.")
            );
          } else {
            const { fecha_creacion, correo } = req.body;
            let nuevoUsuario = {
              username,
              password,
              correo,
              fecha_creacion,
            };
            nuevoUsuario.password = await helpers.encryptPassword(password);
            const resultado = await orm.usuario_paciente.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;
            return done(null, nuevoUsuario);
          }
        }
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
