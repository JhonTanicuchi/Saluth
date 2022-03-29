const persona = (sequelize, type) => {
  return sequelize.define(
    "persona",
    {
      idPersona: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: type.STRING,
      apellidos: type.STRING,
      cedula: type.STRING,
      genero: type.STRING,
      fechaNacimiento: type.STRING,
      estatura: type.STRING,
      peso: type.STRING,
      donador: type.BOOLEAN,
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
