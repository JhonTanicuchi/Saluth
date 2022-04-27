const persona = (sequelize, type) => {
  return sequelize.define(
    "persona",
    {
      id_persona: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cedula_persona: type.STRING,
      nombres_persona: type.STRING,
      apellidos_persona: type.STRING,
      fecha_nacimiento_persona: type.STRING,
      direccion_persona: type.STRING,
      tel_persona: type.STRING,
      estado_persona: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionPersona: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPersona: {
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

module.exports = persona;
