
    window.onload=function() {
        var fondoPopup = document.getElementById('fondo-popup'),
        popup = document.getElementById('popup')

        setTimeout(function(){
            fondoPopup.classList.add('active');
            popup.classList.add('active');
            document.body.classList.add('scroll')
    
        }, 1000);
    }


    function cerrar(){
        var fondoPopup = document.getElementById('fondo-popup'),
        popup = document.getElementById('popup')
        fondoPopup.classList.remove('active');
        popup.classList.remove('active');
        document.body.classList.remove('scroll')
};
    

