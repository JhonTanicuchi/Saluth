document.querySelector(".agregar").addEventListener("click", agregar);
document.querySelector(".resultados").addEventListener("click", resultados);

var parametros = [];
var valores = [];

function agregar() {
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>';
    document.querySelector(".container").innerHTML = html + newHTML;
}


function resultados() {
    for (var i = 0; i < document.querySelectorAll('.parametro').length; i++) {
        parametros.push(document.querySelectorAll('.parametro')[i].value);
        valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
        x: parametros,
        y: valores,
        type: "bar"
    }];
    Plotly.newPlot("grafico", data);
}