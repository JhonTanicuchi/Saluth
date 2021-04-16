/* ANIMACION DE VENTANAS*/

function boton1() {    
   
  
    inicio.classList.toggle("visible");
    validacion.classList.toggle("visible");
    contenidoFrontal.classList.add("movimiento");
  
    bienvenida.classList.toggle("ocultar");
    form.classList.toggle("ocultar");
    contenidoFrontal.classList.remove("frontalreduccion")
    contenidoFrontal.classList.remove("frontalCompleto")
  
  }
  
  function boton2() {  
  
    inicio.classList.toggle("visible");
    validacion.classList.toggle("visible");
    contenidoFrontal.classList.remove("movimiento");
    
    bienvenida.classList.toggle("ocultar");
    form.classList.toggle("ocultar");
    contenidoFrontal.classList.remove("frontalreduccion")
    contenidoFrontal.classList.remove("frontalCompleto")
  
  }