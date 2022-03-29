
var fondoPopup = document.getElementById('fondo-popup'),
	popup = document.getElementById('popup'),
    btn_save_cita = document.getElementById('btn_save_cita'),
    btn_aceptar = document.getElementById('btn_aceptar'),
    btn_cerrar = document.getElementById('btn_cerrar');
	

btn_save_cita.onclick = function() {
    fondoPopup.classList.add('active');
    popup.classList.add('active');
    document.body.classList.add('scroll')
}

btn_aceptar.onclick = function(){
	fondoPopup.classList.remove('active');
    popup.classList.remove('active');
    document.body.classList.remove('scroll')
};
	