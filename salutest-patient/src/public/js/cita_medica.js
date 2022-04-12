function cita_medica_filter() {
    // Declare variables
    var input, filter, table, tr, td, i, j, visible;
    var input = document.getElementById("cita_medica_filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("cita_medica_table");
    tr = table.getElementsByTagName("tr");
  console.log(filter)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      visible = false;
      /* Obtenemos todas las celdas de la fila, no sólo la primera */
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          visible = true;
        }
      }
      if (visible === true) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  