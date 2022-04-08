const signos_vitales = {}

signos_vitales.mostrar = (req,res) => {
    res.render ('modules/signos_vitales')
}

module.exports = signos_vitales