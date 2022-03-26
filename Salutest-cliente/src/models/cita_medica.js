const cita_medica = (sequelize, type) => {
  return sequelize.define(
    "cliente",
    {
      id_cita_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionCliente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCliente: {
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

module.exports = cita_medica;
