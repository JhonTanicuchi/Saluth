const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");
const Handlebars = require("handlebars");

const sucursales_medicas = {};

Handlebars.registerHelper("formatDate", function (date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

Handlebars.registerHelper("length", function (list) {
  return list.length;
});

Handlebars.registerHelper("farmacia", function (categoria) {
  return categoria=="Farmacia";
});

Handlebars.registerHelper("centro_medico", function (categoria) {
  return categoria == "Centro Médico";
});

Handlebars.registerHelper("clinica", function (categoria) {
  return categoria == "Clínica";
});

Handlebars.registerHelper("hospital", function (categoria) {
  return categoria == "Hospital";
});

sucursales_medicas.mostrar = (req, res) => {
  res.render("modules/sucursales_medicas");
};

sucursales_medicas.read = async (req, res) => {
  const id_institucion_medica = req.params.id;
  const sucursales_medicas = await sql.query(
    "SELECT * FROM sucursal_medicas WHERE institucionMedicaIdInstitucionMedica = ?",
    [id_institucion_medica]
  );
   const institucion_medica = await sql.query(
     "SELECT * FROM institucion_medicas WHERE id_institucion_medica = ?",
     [id_institucion_medica]
   );
  res.render("modules/sucursales_medicas", {
    sucursales_medicas,
    institucion_medica,
  });
};

module.exports = sucursales_medicas;
