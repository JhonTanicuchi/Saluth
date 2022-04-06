const rol = (sequelize, type) => {
    return sequelize.define(
        "rol", {
            id_catalogo: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: type.STRING(99),
            creacionRoles: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            actualizacionRoles: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP "),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );
};

module.exports = rol;