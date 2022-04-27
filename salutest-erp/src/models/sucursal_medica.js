const sucursal_medica = (sequelize, type) => {
  return sequelize.define(
    "sucursal_medica",
    {
      id_sucursal_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_sucursal_medica: type.STRING,
      direccion_sucursal_medica: type.STRING,
      estado_sucursal_medica: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionSucursal_medica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSucursal_medica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP "),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = sucursal_medica;
