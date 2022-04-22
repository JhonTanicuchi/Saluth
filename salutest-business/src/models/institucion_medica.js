const institucion_medica = (sequelize, type) => {
  return sequelize.define(
    "institucion_medica",
    {
      id_institucion_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      descripcion: type.STRING,
      estado: type.BOOLEAN,
      creacioninstituciones_medicas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacioninstituciones_medicas: {
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

module.exports = institucion_medica;
