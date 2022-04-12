const recetaMedica_medicamento = (sequelize, type) => {
    return sequelize.define(
        "recetaMedica_medicamento", {
            id_catalogo: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            dosis: type.STRING,
            descripcion: type.STRING,
            recetaMedica_medicamentos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            recetaMedica_medicamentos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP "),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );
};

module.exports = recetaMedica_medicamento;