var Fila = null

function onSubmit() {
    let DataForm = Leer()
    if (Fila == null) {
        InsertarDatos(DataForm)
    } else {
        Actualizar(DataForm)
        Vaciar()
    }
}

//La visualizacion de los datos
function Leer() {
    let DataForm = {}
    DataForm["cod"] = document.getElementById("cod").value
    DataForm["pro"] = document.getElementById("pro").value
    DataForm["peso"] = document.getElementById("peso").value
    DataForm["pre"] = document.getElementById("pre").value
    return DataForm
}

//Insertar datos
function InsertarDatos(data) {
    let table = document.getElementById("tabla_medicamentos").getElementsByTagName('tbody')[0];
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.cod
    columna2 = Fila.insertCell(1).innerHTML = data.pro
    columna3 = Fila.insertCell(2).innerHTML = data.peso
    columna4 = Fila.insertCell(3).innerHTML = data.pre
    columna5 = Fila.insertCell(4).innerHTML = `<input class="editar_medicamentos" type="button" onClick="Editar(this)" value="Editar" >
                                                <input class="eliminar_medicamentos" type="button" onClick="onDelete(this)" value="Eliminar">`
    document.getElementById("cod").focus()
    Vaciar()
}

function Vaciar() {
    document.getElementById("cod").value = ""
    document.getElementById("pro").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("pre").value = ""
    Fila = null
}
//Editar datos
function Editar(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("cod").value = Fila.cells[0].innerHTML
    document.getElementById("pro").value = Fila.cells[1].innerHTML
    document.getElementById("peso").value = Fila.cells[2].innerHTML
    document.getElementById("pre").value = Fila.cells[3].innerHTML
}

//Actualizar datos
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.cod
    Fila.cells[1].innerHTML = DataForm.pro
    Fila.cells[2].innerHTML = DataForm.peso
    Fila.cells[3].innerHTML = DataForm.pre
    document.getElementById("cod").focus()
}

//Eliminar Datos
function onDelete(td) {
    if (confirm('¿Seguro quieres borrar estos datos?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tabla_medicamentos').deleteRow(row.rowIndex);
        Vaciar();
    }
}