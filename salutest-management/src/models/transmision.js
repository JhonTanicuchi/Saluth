const transmision = (sequelize, type) => {
  return sequelize.define(
    "transmision",
    {
      id_transmision: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_transmision: type.STRING,
      descripcion_transmision: type.STRING,
      estado_transmision: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionTransmision: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionTransmision: {
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

module.exports = transmision;
