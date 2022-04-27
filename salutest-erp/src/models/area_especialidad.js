const area_especialidade = (sequelize, type) => {
  return sequelize.define(
    "area_especialidad",
    {
      id_area_especialidad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionArea_especialidad: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionArea_especialidad: {
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

module.exports = area_especialidade;
