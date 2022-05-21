const sql = require("../config-database/database.sql");
const shortcuts = {};

shortcuts.link = async (req, res) => {
  const { nombre_shortcut } = req.body;
  await sql.query("INSERT INTO shortcuts (nombre_shortcut,ruta_shortcut) VALUES (?,?)", [
    nombre_shortcut,
    req.get("referer"),
  ]);
  console.log("hello");
  res.redirect(req.get("referer"));
};

shortcuts.unlink = async (req, res) => {
  const id_shortcut = req.params.id;
  await sql.query("UPDATE shortcuts SET estado_shortcut = 0 WHERE id_shortcut = ?", [id_shortcut]);
  res.redirect(req.get("referer"));
};

module.exports = shortcuts;
