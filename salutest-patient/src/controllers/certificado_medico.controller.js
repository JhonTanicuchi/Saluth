const certificado_medico = {}

certificado_medico.mostrar = (req,res) => {
    res.render ('modules/cita_medica/certificado_medico')
}

module.exports = certificado_medico