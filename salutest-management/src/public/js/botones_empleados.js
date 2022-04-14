//Informacion del empleado
/*function agregarEmpleado(){
    let nombre1 = document.getElementById("nombre-1").value;
    let nombre2 = document.getElementById("nombre-2").value;
    let apellido1 = document.getElementById("apellido-1").value;
    let apellido2 = document.getElementById("apellido-2").value;
    let fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    let numeroCedula = document.getElementById("numero-cedula").value;
    let direccionEmpleado = document.getElementById("direccion-empleado").value;
    let generoMasculino = document.getElementById("genero-masculino");
    let generoFemenino = document.getElementById("genero-femenino");
    let generoOtro = document.getElementById("genero-otro");
    let generos = '';
    let estadoCivilSoltero = document.getElementById("soltero");
    let estadoCivilCasado = document.getElementById("casado");
    let estadoCivilUnionLibre = document.getElementById("union-libre");
    let estadoCivilSeparado = document.getElementById("separado");
    let estadoCivilDivorciado = document.getElementById("divorciado");
    let estadoCivilViudo = document.getElementById("viudo");
    let estadosCiviles = '';
    let provinciaEmpleado = document.getElementById("provincia-empleado").value;
    let cantonEmpleado = document.getElementById("canton-empleado").value;
    let parroquiaEmpleado = document.getElementById("parroquia-empleado").value;
    let sueldos = document.getElementById("sueldo").value;
    
    document.getElementById('nombre').innerHTML = nombre1 + " " + nombre2 + " " + apellido1 + " " + apellido2;
    document.getElementById('nacimiento').innerHTML = fechaNacimiento;
    document.getElementById('cedula').innerHTML = numeroCedula;
    document.getElementById('direccion').innerHTML = direccionEmpleado;

         if (generoMasculino.checked) {
            generos = generoMasculino.value;
        }else if(generoFemenino.checked) {
            generos = generoFemenino.value;
        }else{
            generos = generoOtro.value;
        }

    document.getElementById('genero').innerHTML = generos;

        if(estadoCivilSoltero.checked) {
            estadosCiviles = estadoCivilSoltero.value;
        }else if(estadoCivilCasado.checked) {
            estadosCiviles = estadoCivilCasado.value;
        }else if(estadoCivilUnionLibre.checked) {
            estadosCiviles = estadoCivilUnionLibre.value;
        }else if(estadoCivilSeparado.checked) {
            estadosCiviles = estadoCivilSeparado.value;
        }else if(estadoCivilDivorciado.checked) {
            estadosCiviles = estadoCivilDivorciado.value;
        }else{
            estadosCiviles = estadoCivilViudo.value
        }

    document.getElementById('estado').innerHTML = estadosCiviles;    
    document.getElementById('provincia').innerHTML = provinciaEmpleado;    
    document.getElementById('canton').innerHTML = cantonEmpleado;
    document.getElementById('parroquia').innerHTML = parroquiaEmpleado;
    document.getElementById('sueldo').innerHTML = sueldos;
}*/


function mostrarCampos(){
    document.getElementById("campos").style.display = 'block';
    document.getElementById("formulario").style.display = 'block';
    document.getElementById("info-empleado").style.display = 'none';
    document.getElementById("formulario_cargo").style.display = 'none';
}

function mostrarTabla() {
    document.getElementById("info-empleado").style.display = 'block';
    document.getElementById("formulario_cargo").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';

}

let mostrarInformacion = document.getElementById('new-employee');
mostrarInformacion.addEventListener('click', mostrarCampos); 

/*let agregarNuevoEmpleado = document.getElementById('agregar');
agregarNuevoEmpleado.addEventListener('click', agregarEmpleado);*/

let agregarNuevoEmpleado2 = document.getElementById('agregar');
agregarNuevoEmpleado2.addEventListener('click', mostrarCampos );

let mostrarInfoTabla = document.getElementById('agregar');
mostrarInfoTabla.addEventListener('click', mostrarTabla );





