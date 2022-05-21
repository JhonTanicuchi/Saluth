const timeago = require('timeago.js');
const timeagoInstance = timeago;
const Handlebars = require("handlebars");


const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return timeagoInstance.format(savedTimestamp);
};

Handlebars.registerHelper("tipos_modulos", function (tipo, tipo_modulo, nombre_catalogo) {
  return nombre_catalogo == "categoria_modulo" && tipo == tipo_modulo;
});

module.exports = helpers;