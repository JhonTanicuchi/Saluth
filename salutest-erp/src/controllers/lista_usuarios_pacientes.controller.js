const lista_usuarios_pacientes = {}

lista_usuarios_pacientes.mostrar = (req,res) => {
    res.render ('modules/lista_usuarios_pacientes')
}

module.exports = lista_usuarios_pacientes