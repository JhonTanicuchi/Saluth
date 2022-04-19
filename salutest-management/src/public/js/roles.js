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

function Leer() {
    let DataForm = {}
    DataForm["rol"] = document.getElementById("rol").value
    DataForm["ced"] = document.getElementById("ced").value
    DataForm["nom"] = document.getElementById("nom").value
    DataForm["ape"] = document.getElementById("ape").value
    DataForm["edad"] = document.getElementById("edad").value
    return DataForm
}

function InsertarDatos(data) {
    let table = document.getElementById("tabla_roles").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.rol
    columna1 = Fila.insertCell(1).innerHTML = data.ced
    columna1 = Fila.insertCell(2).innerHTML = data.nom
    columna2 = Fila.insertCell(3).innerHTML = data.ape
    columna3 = Fila.insertCell(4).innerHTML = data.edad
    columna3 = Fila.insertCell(5).innerHTML = `<input class="editar" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="eliminar" type="button" onClick="Borrarr(this)" value="Eliminar" >`
    document.getElementById("rol").focus()
    Vaciar()
}



function Vaciar() {
    document.getElementById("rol").value = ""
    document.getElementById("ced").value = ""
    document.getElementById("nom").value = ""
    document.getElementById("ape").value = ""
    document.getElementById("edad").value = ""
    Fila = null
}

function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("rol").value = Fila.cells[0].innerHTML
    document.getElementById("ced").value = Fila.cells[1].innerHTML
    document.getElementById("nom").value = Fila.cells[2].innerHTML
    document.getElementById("ape").value = Fila.cells[3].innerHTML
    document.getElementById("edad").value = Fila.cells[4].innerHTML
}

function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.rol
    Fila.cells[1].innerHTML = DataForm.ced
    Fila.cells[2].innerHTML = DataForm.nom
    Fila.cells[3].innerHTML = DataForm.ape
    Fila.cells[4].innerHTML = DataForm.edad
    document.getElementById("ced").focus()
}

function Borrarr(td) {
    if (confirm('¿Seguro quieres borrar estos datos?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla_roles").deleteRow(row.rowIndex)
        Vaciar()
    }
}