const usuarios_pacientes = {}

usuarios_pacientes.mostrar = (req,res) => {
    res.render ('modules/usuarios_pacientes')
}

module.exports = usuarios_pacientes