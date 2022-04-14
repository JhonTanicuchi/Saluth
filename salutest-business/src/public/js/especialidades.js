var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
            generar()
            

    }
}
function Leer() {
    let DataForm = {}
    DataForm["esp"] = document.getElementById("esp").value
    DataForm["desc"] = document.getElementById("desc").value
    DataForm["fecha"] = document.getElementById("fecha").value
    DataForm["est"] = document.getElementById("est").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.oculto
    columna2 = Fila.insertCell(1).innerHTML = data.esp
    columna3 = Fila.insertCell(2).innerHTML = data.desc
    columna4 = Fila.insertCell(3).innerHTML = data.fecha
    columna5 = Fila.insertCell(4).innerHTML = data.est
    columna5 = Fila.insertCell(5).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("esp").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("oculto").value = ""
    document.getElementById("esp").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("est").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("oculto").value = Fila.cells[0].innerHTML
    document.getElementById("esp").value = Fila.cells[1].innerHTML
    document.getElementById("desc").value = Fila.cells[2].innerHTML
    document.getElementById("fecha").value = Fila.cells[3].innerHTML
    document.getElementById("est").value = Fila.cells[4].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.oculto
    Fila.cells[1].innerHTML = DataForm.esp
    Fila.cells[2].innerHTML = DataForm.desc
    Fila.cells[3].innerHTML = DataForm.fecha
    Fila.cells[4].innerHTML = DataForm.est
    document.getElementById("esp").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla_especialidades").deleteRow(row.rowIndex)
        Vaciar()
    }
   
    
}