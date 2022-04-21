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
/*       const rows = await sql.query(
        "SELECT * FROM usuario_businesses WHERE username=?",
        [username]
      ); */
      const person_rows = await sql.query(
        "SELECT * FROM usuario_businesses u join empleado_businesses e on u.id_usuario_business = e.id_empleado_business join personas p on e.personaIdPersona = p.id_persona join rols r on r.id_rol = u.rolIdRol WHERE u.username =?",
        [username]
      );
      if (person_rows.length > 0) {
        const user = person_rows[0];
        console.log(user)

        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Bienvenido" + user.nombres));
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

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      let nuevoUsuario;
      let nuevoEmpleado;
      let nuevaPersona;

      const usuario_business = await orm.usuario_business.findOne({
        where: { username: username },
      });
      if (usuario_business === null) {
        const { cedula, nombres, apellidos, fecha_nacimiento, direccion } =
          req.body;
        let nuevaPersona = {
          cedula,
          nombres,
          apellidos,
          fecha_nacimiento,
          direccion,
        };

        await orm.persona.create(nuevaPersona);

        sql.query(
          "select * from personas where cedula = ?",
          [cedula],
          async function (error, results, fields) {
            if (error) throw error;
            let nuevoEmpleado = {
              estado: true,
              personaIdPersona: results[0].id_persona,
            };

            await orm.empleado_business.create(nuevoEmpleado);
          }
        );

        sql.query(
          "select * from empleado_businesses e join personas p on e.personaIdPersona = p.id_persona WHERE p.cedula = ?",
          [cedula],
          async function (error, results, fields) {
            if (error) throw error;
            const { correo } = req.body;
            console.log(results);
            console.log(cedula);

            let nuevoUsuario = {
              username,
              password,
              correo,
              empleadoBusinessIdEmpleadoBusiness:
                results[0].id_empleado_business,
            };

            nuevoUsuario.password = await helpers.encryptPassword(password);
            const resultadoUsuario = await orm.usuario_business.create(
              nuevoUsuario
            );
          }
        );
        return done(null, nuevoUsuario, nuevoEmpleado, nuevaPersona);
      } else {
        if (usuario_business) {
          const usuario = usuario_business;
          if (username == usuario.username) {
            done(
              null,
              false,
              req.flash("message", "El nombre de usuario ya existe.")
            );
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
