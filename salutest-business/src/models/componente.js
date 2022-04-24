const componente = (sequelize, type) => {
    return sequelize.define(
      "componente",
      {
        id_componente: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre_componente: type.STRING,
        descripcion_componente: type.STRING,
        
        estado_componente: type.BOOLEAN,
        default_componente: type.BOOLEAN,


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