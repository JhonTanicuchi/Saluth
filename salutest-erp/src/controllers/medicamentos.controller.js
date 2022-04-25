const orm = require("../config-database/database.orm");
const sql = require("../config-database/database.sql");

const medicamentos = {}

medicamentos.mostrar = (req, res) => {
    res.render('modules/medicamentos')
}

module.exports = medicamentos

medicamentos.save = async(req, res) => {
    const { cod, pro, peso, pre } =
    req.body;
    const nuevosMedicamentos = {
        cod,
        pro,
        peso,
        pre,
    };
    await orm.medicamento.create(nuevosMedicamentos);
    res.redidect('/home');
}
medicamentos.list = async(req, res) => {
    const medicamentos = await sql.query("SELECT * FROM medicamentos");
    console.log(medicamentos)
    res.render('modules/medicamentos', { medicamentos });
}

module.exports = medicamentos;