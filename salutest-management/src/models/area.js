const area = (sequelize, type) => {
  return sequelize.define(
    "area",
    {
      id_area: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_area: type.STRING,
      estado_area: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionArea: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionArea: {
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

module.exports = area;
