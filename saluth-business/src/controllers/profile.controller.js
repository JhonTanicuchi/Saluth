const sql = require("../config-database/database.sql");
const profile = {};
const express = require("express");
const app = express();

profile.general = (req, res) => {
  res.render("users/profile/general");
};

profile.security = (req, res) => {
  res.render("users/profile/security");
};

profile.update_general = async (req, res) => {
  const id_persona = req.params.id;
  const {
    cedula_persona,
    nombres_persona,
    apellidos_persona,
    fecha_nacimiento_persona,
    direccion_persona,
    tel_persona,
  } = req.body;

  const { filename, path, originalname, mimetype, size } = req.file;

  await sql.query(
    "INSERT INTO images (filename,path,originalname,mimetype,size) VALUES (?,?,?,?,?)",
    [filename, "/img/uploads/profile/" + filename, originalname, mimetype, size]
  );

  const id_image = await sql.query("SELECT id_image FROM images WHERE filename = ?", [filename]);

  await sql.query(
    "UPDATE personas SET cedula_persona = ?,nombres_persona= ?,apellidos_persona= ?,fecha_nacimiento_persona= ?,direccion_persona= ?,tel_persona= ?  WHERE id_persona = ?",
    [
      cedula_persona,
      nombres_persona,
      apellidos_persona,
      fecha_nacimiento_persona,
      direccion_persona,
      tel_persona,
      id_persona,
    ]
  );

  await sql.query("UPDATE usuario_businesses SET imageIdImage = ? WHERE id_usuario_business = ?", [
    id_image[0].id_image,
    id_persona,
  ]);

  

  console.log(req.file);

  res.redirect(req.get("referer"));
};

profile.update_credentials = async (req, res) => {
  const id_persona = req.params.id;
  const { username, password, correo } = req.body;
  await sql.query(
    "UPDATE usuario_businesses SET username = ?,password= ?,correo= ? WHERE id_usuario_business = ?",
    [username, password, correo, id_persona]
  );

  res.redirect(req.get("referer"));
};

module.exports = profile;
