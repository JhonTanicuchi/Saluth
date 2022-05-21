/**
 * Reading Environment Variables
 */
const dotenv = require("dotenv");
dotenv.config();

/**
 * Importing the Main App
 */
const app = require("./app");
const colors = require("colors");

const server = app.listen(app.get("port"));
console.log("El servidor esta en el puerto".cyan, colors.grey(app.get("port")));
