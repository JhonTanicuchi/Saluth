document.querySelector(".agregar_estadisticas").addEventListener("click", agregar);
document.querySelector(".resultados_estadisticas").addEventListener("click", resultados);

var parametros = [];
var valores = [];

function agregar() {
    let html = document.querySelector(".container_estadisticas").innerHTML;
    let newHTML = '<div><input name=parametro_estadisticas type="text" class="parametro_estadisticas" placeholder="Parametro"><input type="number" class="valor_estadisticas" placeholder="valor"></div>';
    document.querySelector(".container_estadisticas").innerHTML = html + newHTML;
}


function resultados() {
    for (var i = 0; i < document.querySelectorAll('.parametro_estadisticas').length; i++) {
        parametros.push(document.querySelectorAll('.parametro_estadisticas')[i].value);
        valores.push(parseInt(document.querySelectorAll(".valor_estadisticas")[i].value));
    }
    var data = [{
        x: parametros,
        y: valores,
        type: "bar"
    }];
    Plotly.newPlot("grafico", data);
}