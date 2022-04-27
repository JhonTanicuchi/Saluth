const sub_area = (sequelize, type) => {
  return sequelize.define(
    "sub_area",
    {
      id_sub_area: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_sub_area: type.STRING,
      estado_sub_area: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionSub_area: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSub_area: {
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

module.exports = sub_area;
