/* CONFIGURACION DE HORA Y FECHA*/
function hora() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h = n.getHours(); 
    min = n.getMinutes(); 
  
    if (h >= 12) {
      h = n.getHours() - 12; 
      horario = " PM";
    } else if (h < 12) {
      horario = " AM";
    }
  
    if (min >= 0 && min < 10) {
      ceromin = "0"; 
    } else {
      ceromin = "";
    }
  
    if (h >= 0 && h < 10) {
      ceroh = "0";
    } else {
      ceroh = "";
    }
  
    if (d >= 0 && d < 10) {
      cerod = "0";
    } else {
      cerod = "";
    }
  
    if (m >= 0 && m < 10) {
      cerom = "0";
    } else {
      cerom = "";
    }

  
    /* MOSTRAR FECHA CONSOLA */
  
    console.log(
      cerod +
        d +
        "/" +
        cerom +
        m +
        "/" +
        y +
        "  " +
        ceroh +
        h +
        ":" +
        ceromin +
        min +
        horario
    );
};

