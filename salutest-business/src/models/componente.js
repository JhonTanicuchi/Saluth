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
<<<<<<< HEAD
        estado_componente: {
          type: type.BOOLEAN,
          defaultValue: true,
        },
=======
        
        estado_componente: type.BOOLEAN,
>>>>>>> 4574da79ddb3dbecfc4134b56e6660ce4505e238
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