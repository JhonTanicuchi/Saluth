const tipo_examene = (sequelize, type) => {
  return sequelize.define(
    "tipo_examene",
    {
      id_tipo_examen: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      descripcion: type.STRING,
      creacionTipoexamenes: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionTipoexamenes: {
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

module.exports = tipo_examene;
