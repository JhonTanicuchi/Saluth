const permiso = (sequelize, type) => {
    return sequelize.define(
        "permiso", {
            id_catalogo: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: type.STRING(99),
            creacionPermisos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            actualizacionPermisos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP "),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );
};

module.exports = permiso;