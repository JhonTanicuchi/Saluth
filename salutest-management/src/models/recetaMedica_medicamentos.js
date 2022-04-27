const recetaMedica_medicamento = (sequelize, type) => {
  return sequelize.define(
    "recetaMedica_medicamento",
    {
      id_catalogo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dosis_recetaMedica_medicamento: type.STRING,
      descripcion_recetaMedica_medicamento: type.STRING,
      creacionRecetaMedica_medicamento: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionRecetaMedica_medicamento: {
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

module.exports = recetaMedica_medicamento;
