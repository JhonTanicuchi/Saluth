const componente = (sequelize, type) => {
    return sequelize.define(
      "componente",
      {
        id_componente: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,

        creacionComponente: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionComponente: {
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
  
  module.exports = componente;