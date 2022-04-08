/* NAV LISTA ACTIVA */

var list_li = document.querySelectorAll('.list');
var list_title = document.getElementsByClassName('title');
var title_modules = document.getElementById('title_modules');


for (let i = 0; i < list_li.length; i++) {
    if ( list_title[i].textContent == title_modules.textContent) {
        list_li[i].className = 'list active';
    }
}

/* MENU NAVEGACION */

let toggle = document.getElementById('toggle');
let sidebar = document.getElementById('sidebar');

toggle.onclick = function () {
    sidebar.classList.toggle('active');
};