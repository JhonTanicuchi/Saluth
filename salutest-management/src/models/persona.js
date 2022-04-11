const persona = (sequelize, type) => {
  return sequelize.define(
    "persona",
    {
      id_persona: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cedula: type.STRING,
      nombres: type.STRING,
      apellidos: type.STRING,
      fecha_nacimiento: type.STRING,
      direccion: type.STRING,
      creacionPersonas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPersonas: {
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
