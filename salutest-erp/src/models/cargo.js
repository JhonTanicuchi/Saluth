const cargo = (sequelize, type) => {
  return sequelize.define(
    "cargo",
    {
      id_cargo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_cargo: type.STRING,
      sueldo_cargo: type.BOOLEAN,
      estado_cargo: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionCargo: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCargo: {
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

module.exports = cargo;
