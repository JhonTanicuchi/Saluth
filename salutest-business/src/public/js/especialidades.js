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
    DataForm["usuario"] = document.getElementById("usuario").value
    DataForm["especialidad"] = document.getElementById("especialidad").value
    DataForm["descripcion"] = document.getElementById("descripcion").value
    DataForm["fecha_creacion"] = document.getElementById("fecha_creacion").value
    DataForm["estado"] = document.getElementById("estado").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.usuario
    columna2 = Fila.insertCell(1).innerHTML = data.especialidad
    columna3 = Fila.insertCell(2).innerHTML = data.descripcion
    columna4 = Fila.insertCell(3).innerHTML = data.fecha_creacion
    columna5 = Fila.insertCell(4).innerHTML = data.estado
    columna5 = Fila.insertCell(5).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("usuario").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("usuario").value = ""
    document.getElementById("especialidad").value = ""
    document.getElementById("descripcion").value = ""
    document.getElementById("fecha_creacion").value = ""
    document.getElementById("estado").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("usuario").value = Fila.cells[1].innerHTML
    document.getElementById("especialidad").value = Fila.cells[1].innerHTML
    document.getElementById("descripcion").value = Fila.cells[2].innerHTML
    document.getElementById("fecha_creacion").value = Fila.cells[3].innerHTML
    document.getElementById("estado").value = Fila.cells[4].innerHTML
}
function Actualizar(DataForm) {

    Fila.cells[1].innerHTML = DataForm.usuario
    Fila.cells[1].innerHTML = DataForm.especialidad
    Fila.cells[2].innerHTML = DataForm.descripcion
    Fila.cells[3].innerHTML = DataForm.fecha_creacion
    Fila.cells[4].innerHTML = DataForm.estado
    document.getElementById("usuario").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla_especialidades").deleteRow(row.rowIndex)
        Vaciar()
    }
   
    
}