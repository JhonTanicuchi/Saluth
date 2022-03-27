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
      const rows = await orm.usuario_client.findOne({
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
      const usuario_client = await orm.usuario_client.findOne({
        where: { username: username },
      });
      if (usuario_client === null) {
        let nuevoUsuario = {
          username,
          password,
        };
        nuevoUsuario.password = await helpers.encryptPassword(password);
        const resultado = await orm.usuario_client.create(nuevoUsuario);
        nuevoUsuario.id = resultado.insertId;
        return done(null, nuevoUsuario);
      } else {
        if (usuario_client) {
          const usuario = usuario_client;
          if (username == usuario.username) {
            done(
              null,
              false,
              req.flash("message", "El nombre de usuario ya existe.")
            );
          } else {
            let nuevoUsuario = {
              username,
              password,
            };
            nuevoUsuario.password = await helpers.encryptPassword(password);
            const resultado = await orm.usuario_client.create(nuevoUsuario);
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
