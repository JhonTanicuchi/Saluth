function Buscar(){
    var LogoC=document.getElementById("LogoC");
    var Buscar=document.getElementById("Buscar");
    var buscadorI=document.getElementById("buscador");
    var Logo_Simple=document.getElementById("Logo-Simple");
    var Bordes=document.getElementById("Bordes");

    LogoC.classList.add("Ocultar");
    Logo_Simple.classList.remove("Ocultar");
    buscadorI.classList.add("ActivarInput");
    Buscar.classList.add("ActivarButton");
    Bordes.classList.remove("Ocultar");

    buscador=document.getElementById("buscador").value;
    console.log(buscador);
    eliminarInfo();
    crearInformacion(buscador);
    buscador=document.getElementById("buscador").reset;
}

function crearInformacion(buscador) {

    asignacion(buscador)

    for (var i = 0; i < Informacion[numero].length; i++) {
        var contenedorInformacion=document.getElementsByTagName("section")[i];
        var parrafo = document.createElement("p");
        parrafo.innerHTML = Informacion[numero][i];
        contenedorInformacion.appendChild(parrafo);
    }
}

function eliminarInfo(){

    var element0=document.getElementById("Select0");
    
    if (element0.childNodes.length>0) 
    element0.removeChild(element0.childNodes[element0.childNodes.length-1]); 

    var element1=document.getElementById("Select1");
    
    if (element1.childNodes.length>0) 

    element1.removeChild(element1.childNodes[element1.childNodes.length-1]); 

    var element2=document.getElementById("Select2");
    
    if (element2.childNodes.length>0) 
    element2.removeChild(element2.childNodes[element2.childNodes.length-1]); 

    var element3=document.getElementById("Select3");
    
    if (element3.childNodes.length>0) 
    element3.removeChild(element3.childNodes[element3.childNodes.length-1]); 

}