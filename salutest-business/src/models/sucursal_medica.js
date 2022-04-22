const sucursal_medica = (sequelize, type) => {
  return sequelize.define(
    "sucursal_medica",
    {
      id_sucursal_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      direccion: type.STRING,
      estado: type.BOOLEAN,
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
