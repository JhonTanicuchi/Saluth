function comenzarTest() {
    var fondoPopup = document.getElementById('fondo-popup'),
    contenedorTest = document.getElementById('contenedor-test')

        setTimeout(function(){
            fondoPopup.classList.add('active');
            contenedorTest.classList.add('active');
            document.body.classList.add('scroll')
    
        }, 300);
    
}

function cancelar(){
    var fondoPopup = document.getElementById('fondo-popup'),
    contenedorTest = document.getElementById('contenedor-test')
  
    fondoPopup.classList.remove('active');
    contenedorTest.classList.remove('active');
    document.body.classList.remove('scroll')
};