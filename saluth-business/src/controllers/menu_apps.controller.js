const menu_aplications = {}

menu_aplications.mostrar = (req,res) => {
    res.render ('modules/apps/menu_apps')
}

module.exports = menu_aplications