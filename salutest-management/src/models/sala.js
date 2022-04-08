const sala = (sequelize, type) => {
  return sequelize.define(
    "sala",
    {
      id_area: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      estado: type.STRING,
      creacionSalas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSalas: {
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

module.exports = sala;
