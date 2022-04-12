const pacientes = {}

pacientes.mostrar = (req,res) => {
    res.render ('modules/pacientes')
}

module.exports = pacientes