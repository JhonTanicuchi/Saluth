/* NAV PESTAÑA LISTA */

var lista_pestanas = document.querySelectorAll(".pestana");
var title_modules = document.getElementById("title_pestaña");
var navegation_pestanas = document.getElementById("navegation_pestanas");

for (let i = 0; i < lista_pestanas.length; i++) {
  var pestana_hija = document.createElement("span");
  pestana_hija.setAttribute("class", "nav_pestana");
  var title = document.createElement("h6");
  title.setAttribute("class", "nav_title_pestana");

  title.textContent = lista_pestanas[i].textContent;
  pestana_hija.appendChild(title);
  navegation_pestanas.appendChild(pestana_hija);

  var nav_title_pestana = document.getElementsByClassName("nav_title_pestana");
  for (let e = 0; e < nav_title_pestana.length; e++) {
    if (nav_title_pestana[e].textContent == title_modules.textContent) {
      nav_title_pestana[e].parentNode.className =
        "nav_pestana nav_pestaña_active";
    }
  }
}
