const contrato = (sequelize, type) => {
  return sequelize.define(
    "contrato",
    {
      id_contrato: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado_contrato: {
        type: type.STRING,
        defaultValue: "pendiente",
      },
      creacionContrato: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionContrato: {
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

module.exports = contrato;
