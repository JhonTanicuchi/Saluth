const mensaje = (sequelize, type) => {
  return sequelize.define(
    "mensaje",
    {
      id_mensaje: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mensaje: type.STRING,
      estado_mensaje: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionMensaje: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionMensaje: {
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

module.exports = mensaje;
