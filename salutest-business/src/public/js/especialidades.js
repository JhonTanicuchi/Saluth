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
    DataForm["id_especialidad"] = document.getElementById("id_especialidad").value
    DataForm["nombre"] = document.getElementById("nombre").value
    DataForm["descripcion"] = document.getElementById("descripcion").value
    DataForm["fecha_creacion"] = document.getElementById("fecha_creacion").value
    DataForm["estado"] = document.getElementById("estado").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.id_especialidad
    columna2 = Fila.insertCell(1).innerHTML = data.nombre
    columna3 = Fila.insertCell(2).innerHTML = data.descripcion
    columna4 = Fila.insertCell(3).innerHTML = data.fecha_creacion
    columna5 = Fila.insertCell(4).innerHTML = data.estado
    columna5 = Fila.insertCell(5).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("id_especialidad").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("id_especialidad").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("descripcion").value = ""
    document.getElementById("fecha_creacion").value = ""
    document.getElementById("estado").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("id_especialidad").value = Fila.cells[1].innerHTML
    document.getElementById("nombre").value = Fila.cells[1].innerHTML
    document.getElementById("descripcion").value = Fila.cells[2].innerHTML
    document.getElementById("fecha_creacion").value = Fila.cells[3].innerHTML
    document.getElementById("estado").value = Fila.cells[4].innerHTML
}
function Actualizar(DataForm) {

    Fila.cells[1].innerHTML = DataForm.id_especialidad
    Fila.cells[1].innerHTML = DataForm.nombre
    Fila.cells[2].innerHTML = DataForm.descripcion
    Fila.cells[3].innerHTML = DataForm.fecha_creacion
    Fila.cells[4].innerHTML = DataForm.estado
    document.getElementById("id_especialidad").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla_especialidades").deleteRow(row.rowIndex)
        Vaciar()
    }
   
    
}