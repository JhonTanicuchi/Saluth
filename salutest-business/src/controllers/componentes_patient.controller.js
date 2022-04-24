const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");
const componente_patient = {};

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

componente_patient.mostrar = (req, res) => {
  res.render("modules/componentes_patient");
};

componente_patient.list = async (req, res) => {
  const tipo_componente = req.params.id;
  let componentes_patient = null;
  const componentes_patient_totales = await sql.query(
    "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Patient'"
  );

  const componentes_patient_privados = await sql.query(
    "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Patient' and c.default_componente = 0"
  );

  const componentes_patient_publicos = await sql.query(
    "select * from componentes c join aplicacions a on c.aplicacionIdAplicacion = a.id_aplicacion WHERE a.nombre_aplicacion = 'Salutest Patient' and c.default_componente = 1"
  );

  if (tipo_componente == "privados") {
    componentes_patient = componentes_patient_privados;
  } else if (tipo_componente == "publicos") {
    componentes_patient = componentes_patient_publicos;
  } else if (tipo_componente == null) {
    componentes_patient = componentes_patient_totales;
  }

  res.render("modules/componentes_patient", {
    componentes_patient,
    componentes_patient_totales,
    componentes_patient_privados,
    componentes_patient_publicos,
  });
};

componente_patient.unlock = async (req, res) => {
  const id_componente_patient = req.params.id;
  const unlockComponente_patient = { default_componente: 1 };
  await orm.componente
    .findOne({ where: { id_componente: id_componente_patient } })
    .then((componentes) => {
      componentes.update(unlockComponente_patient);
    });

  res.redirect(req.get("referer"));
};

componente_patient.lock = async (req, res) => {
  const id_componente_patient = req.params.id;
  const lockComponente_patient = { default_componente: 0 };
  await orm.componente
    .findOne({ where: { id_componente: id_componente_patient } })
    .then((componentes) => {
      componentes.update(lockComponente_patient);
    });

  res.redirect(req.get("referer"));
};

module.exports = componente_patient;
