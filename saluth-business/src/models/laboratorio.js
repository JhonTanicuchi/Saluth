const laboratorio = (sequelize, type) => {
  return sequelize.define(
    "laboratorio",
    {
      id_laboratorio: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_laboratorio: type.STRING,
      estado_laboratorio: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionLaboratorio: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionLaboratorio: {
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

module.exports = laboratorio;
