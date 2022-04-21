const especialidad = (sequelize, type) => {
  return sequelize.define(
    "especialidade",
    {
      id_especialidad: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      descripcion: type.STRING,
      fecha_creacion: type.STRING,
      estado: type.STRING,
      creacionEspecialidades: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionEspecialidades: {
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

module.exports = especialidad;
