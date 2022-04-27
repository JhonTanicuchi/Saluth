const institucion_medica = (sequelize, type) => {
  return sequelize.define(
    "institucion_medica",
    {
      id_institucion_medica: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_institucion_medica: type.STRING,
      descripcion_institucion_medica: type.STRING,
      estado_institucion_medica: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacioninstitucion_medica: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacioninstitucion_medica: {
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
