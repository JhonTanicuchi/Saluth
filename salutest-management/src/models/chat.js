const chat = (sequelize, type) => {
    return sequelize.define(
      "chat",
      {
        id_chat: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        estado_chat: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
        creacionChat: {
          type: "TIMESTAMP",
          defaultValue: type.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        actualizacionChat: {
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
  
  module.exports = chat;