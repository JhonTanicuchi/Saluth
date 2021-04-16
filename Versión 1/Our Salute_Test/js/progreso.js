function crearProgreso() {
  var contenedorProgreso = document.getElementById("progreso-preguntas");

  for (let index = 0; index < 5; index++) {
    var span = document.createElement("span");
    span.setAttribute("class", "progresoAnimation");
    contenedorProgreso.appendChild(span);
  }
}

var valorProgreso = -1;

function progreso() {

  if (valorProgreso < 4) {
    valorProgreso++;
    var figuraCarga = document.getElementsByTagName("span")[valorProgreso];
    figuraCarga.style.opacity = "100%";
    figuraCarga.style.transform = "scale(1.4)";
    figuraCarga.style.margin = "0 4px";
  }
  
  var valorDesactivar = 0;

  for (let index = 0; valorDesactivar < valorProgreso; index++) {
    figuraCarga = document.getElementsByTagName("span")[valorDesactivar];
    figuraCarga.style.opacity = "40%";
    figuraCarga.style.transform = "scale(1)";
    figuraCarga.style.margin = "0 2px";
    valorDesactivar++;
  }
}

