const rol_permiso = (sequelize, type) => {
    return sequelize.define(
        "rol_permiso", {
            id_catalogo: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            creacionRoles_permisos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            actualizacionRoles_permisos: {
                type: "TIMESTAMP",
                defaultValue: type.literal("CURRENT_TIMESTAMP "),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );
};

module.exports = rol_permiso;