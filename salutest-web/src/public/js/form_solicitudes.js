function input_sucursales() {
  var boolean_sucursales = document.getElementById("sucursales");
  var n_sucursales = document.getElementById("n_sucursales");
  var boolean_sucursales_value = boolean_sucursales.value;

  if (boolean_sucursales_value == "false") {
    n_sucursales.setAttribute("disabled", "");
    n_sucursales.style = "opacity: 50%"
  }
  if (boolean_sucursales_value == "true") {
    console.log(boolean_sucursales_value);
    n_sucursales.removeAttribute("disabled");
    n_sucursales.style = "opacity: 100%";

  }
}