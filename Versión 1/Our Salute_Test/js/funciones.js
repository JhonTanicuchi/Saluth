/* VALIDACION DEL FORMULARIO */

function validar() {
  crearPreguntas()
  crearProgreso()
  progreso();
}


function crearPreguntas() {

  var contenedorPreguntas = document.getElementById('preguntas-contenidoFrontal');
 
  while (contenedorPreguntas.firstChild) {
    contenedorPreguntas.removeChild(contenedorPreguntas.firstChild);
  }
  
  
  var parrafo = document.createElement("p");
  parrafo.setAttribute("class", "preguntas-test");
  
  parrafo.innerHTML = preguntas[boton++];
  contenedorPreguntas.appendChild(parrafo);

}


function animacionPreguntas() {
  contenidoFrontal.classList.add("animacion-ventana-test");
}
function animacionPreguntasFalse() {
  contenidoFrontal.classList.remove("animacion-ventana-test");
}


/* PROCESO NEXT PREGUNTA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  /* BONTON VERDADERO */
  
  function click1() {
    botonV++; 
   animacionPreguntas()
   crearPreguntas()
   setTimeout(function(){ animacionPreguntasFalse(); }, 700);
   progreso()
  
    /* CONSOLA */
  
    console.log("Pregunta # " + (boton - 1));
    console.log("Valor = " + valor1);
    console.log("");
  
    /* PROCESO PORCENTAJE*/
  
    if (boton >= 1 && boton <= (preguntas.length) + 1) {
      correctas = botonV ;
      porcentaje = (correctas * valor1) / preguntas.length ;
    }
  
    /* CONSOLA */
  
    consola();
  
    /* RESULTADOS DEL TEST %*/
  
    fin()

  
    procesoresultado();
  
  }
  
  /* BONTON FALSO */
  
  function click2() {
    botonF++;

    animacionPreguntas()
    crearPreguntas()
    setTimeout(function(){ animacionPreguntasFalse(); }, 700);
    progreso()

    /* CONSOLA */
  
    console.log("Pregunta #" + (boton - 1));
    console.log("valor = " + valor2);
    console.log("");
  
    /* PROCESO PORCENTAJE DE FORMULARIO */
  
    if (boton >= 1 && boton <= (preguntas.length)+ 1) {
      incorrectas = botonF ;
      porcentaje = (correctas * valor1) / preguntas.length ;
    }
  
    /* CONSOLA */
  
    consola();
  
    /* RESULTADOS DEL TEST %*/
  
    fin();

    

    procesoresultado();

  
  }
  
/* FIN */
  function fin() {

    if (boton == (preguntas.length) + 1) {
      boton2()
    

      
      var botonesFinalizarTest = document.getElementById("botones-finalizar-test");
      botonesFinalizarTest.style.display="flex";
      eliminar()

    }


  }


  function eliminar() {
    var element  = document.getElementById("bienvenida-contenido");
    var element2  = document.getElementById("presentacion");
    var contenido  = document.getElementById("contenido");


  
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  contenido.removeChild(element2);

  }

function porcentajeTest() {
  var div = document.getElementById('bienvenida-contenido');

  let h1 = document.createElement("h1");
  h1.setAttribute("class", "porcentaje-test");
  h1.innerHTML = porcentaje + "%";
  div.appendChild(h1);
}



function sano() {
  var div = document.getElementById('bienvenida-contenido');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[0];
  div.appendChild(parrafo);

}
function probable() {
  var div = document.getElementById('bienvenida-contenido');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[1];
  div.appendChild(parrafo);
}
function urgente() {
  var div = document.getElementById('bienvenida-contenido');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[2];
  div.appendChild(parrafo);
}

  /* EXTREMOS CORRECTOS E INCORRECTOS */
  
  if (botonV == 0) {
    correctas = 0;
  }
  if (botonF == 0) {
    incorrectas = 0;
  }
  
  /* FIN PROCESO NEXT PREGUNTA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  function consola() {
    if (boton == (preguntas.length) + 1) {
      console.log("Respuestas Correctas = " + correctas);
      console.log("Respuestas Incorrectas = " + incorrectas);
      console.log("");
      console.log("Porcentaje Probable " + porcentaje + "%");
      console.log("");
    }
  }

  function crearAlertaRoja() {
    let div = document.getElementById("img-alertas-3");

    div.style.display ="flex"

  }

  function crearAlertaAmarilla() {
    let div = document.getElementById("img-alertas-2");

    div.style.display ="flex"
  }

  function crearAlertaVerde() {
    let div = document.getElementById("img-alertas-1");

    div.style.display ="flex"
  }
 
  function procesoresultado() {
    if (porcentaje >= 0 && porcentaje <= 25 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Sano");
      crearAlertaVerde()
      porcentajeTest()
      sano() 
      emergencias()
    } else if (porcentaje > 25 && porcentaje <= 50 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Probable");
      crearAlertaAmarilla()
      porcentajeTest()
      probable()
    } else if (porcentaje > 50 && porcentaje <= 100 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Urgente");
      crearAlertaRoja()
      porcentajeTest()
      urgente()
    }
  }


