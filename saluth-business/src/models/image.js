const image = (sequelize, type) => {
  return sequelize.define(
    "image",
    {
      id_image: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      filename: type.STRING,
      path: type.STRING,
      originalname: type.STRING,
      mimetype: type.STRING,
      size: type.INTEGER,
      estado_image: {
        type: type.BOOLEAN,
        defaultValue: true,
      },
      creacionImage: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacioIimage: {
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

module.exports = image;
