const medicamento = (sequelize, type) => {
  return sequelize.define(
    "medicamento",
    {
      id_medicamento: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_medicamento: type.STRING,
      descripcion_medicamento: type.STRING,
      estado_medicamento: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionMedicamento: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionMedicamento: {
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

module.exports = medicamento;
