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
      const rows = await orm.usuario_empleado.findOne({
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
      const usuario_empleado = await orm.usuario_empleado.findOne({
        where: { username: username },
      });
      if (usuario_empleado === null) {

        const { cedula, nombres, apellidos, fecha_nacimiento, direccion } =
          req.body;
        let nuevaPersona = {
          cedula,
          nombres,
          apellidos,
          fecha_nacimiento,
          direccion,
        };

        const resultadoPersona = await orm.persona.create(nuevaPersona);
        nuevaPersona.id_persona = resultadoPersona.insertId;


        let nuevoEmpleado = {
          estado : true
        };

        const resultadoEmpleado = await orm.empleado.create(nuevoEmpleado);
        nuevoEmpleado.id_empleado = resultadoEmpleado.insertId;


         const persona_id = await sql.query(
           "select idProyecto from proyectos where idProyecto = ?",
           [nuevoEmpleado.id_empleado]
         );
        
        const { correo, empleado } = req.body;
        let nuevoUsuario = {
          username,
          password,
          correo,
          empleadoIdEmpleado: empleado,
        };
      
        nuevoUsuario.password = await helpers.encryptPassword(password);
        const resultadoUsuario = await orm.usuario_empleado.create(nuevoUsuario);
        nuevoUsuario.id_usuario_empleado = resultadoUsuario.insertId;
        return done(null, nuevoUsuario, nuevaPersona);
      } else {
        if (usuario_empleado) {
          const usuario = usuario_empleado;
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
            const resultado = await orm.usuario_empleado.create(nuevoUsuario);
            nuevoUsuario.id_usuario_empleado = resultado.insertId;
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
