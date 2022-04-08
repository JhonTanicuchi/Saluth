const medicamento = (sequelize, type) => {
  return sequelize.define(
    "medicamento",
    {
      id_medicamento: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      descripcion: type.STRING,
      creacionMedicamentos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionMedicamentos: {
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
