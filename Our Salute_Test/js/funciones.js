function iniciar() {
    pantallaUno.classList.add("ocultar")
    pantallaDos.classList.remove("ocultar")
    cargarSintomas()
}

function aceptar() {
    eliminarSintomas()
    cargarSintomas()
    pantallaUno.classList.add("ocultar")
    pantallaDos.classList.remove("ocultar")
}

function cargarSintomas() {
  let li = document.createElement("li");
  li.innerHTML = enfermedades[0][2];
  ul.appendChild(li);

  let li2 = document.createElement("li");
  li2.innerHTML = enfermedades[1][0];
  ul.appendChild(li2);
}

function eliminarSintomas() {
    
}
  
function resultados() {

    if (valorDiabetes == 10) {
        console.log("Diabetes")
    }
    
    if (valorDiabetes == 20) {
        console.log("Colelitiasis")
    }
    
    if (valorDiabetes == 30) {
        console.log("Neumonia")
    }
    
    if (valorDiabetes == 40) {
        console.log("Gastroentesteritis")
    }
    
    if (valorDiabetes == 50) {
        console.log("Apendicitis")
    }
}