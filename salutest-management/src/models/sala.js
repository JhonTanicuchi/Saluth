const sala = (sequelize, type) => {
  return sequelize.define(
    "sala",
    {
      id_sala: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_sala: type.STRING,
      estado_sala: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionSala: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSala: {
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
