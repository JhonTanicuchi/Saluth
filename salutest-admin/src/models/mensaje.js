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
      fecha: type.STRING,
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
