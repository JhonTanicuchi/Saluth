/* Filtro Basico */
function SearchFilterBasico() {
  var filter, lista, li, i;
  filter = document.getElementById("buscadorBasico").value.toUpperCase();
  lista = document.getElementById("listaBasico");
  li = lista.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {li[i].style.display = "none";}
  }
}
