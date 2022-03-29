const salud = {}

salud.mostrar = (req,res) => {
    res.render ('modules/salud_home.hbs')
}

module.exports = salud