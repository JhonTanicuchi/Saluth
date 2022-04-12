const transmision = (sequelize, type) => {
  return sequelize.define(
    "transmision",
    {
      id_transmision: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      descripcion: type.STRING,
      
      creacionTransmisiones: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionTransmisiones: {
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
