const area_citaMedica = (sequelize, type) => {
    return sequelize.define(
      "area_citaMedica",
      {
        id_area_citaMedica: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        creacionArea_citaMedica: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionArea_citaMedica: {
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
  
  module.exports = area_citaMedica;