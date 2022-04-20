const email = {};

email.create = (req, res, name, username, password) => {
  //Requerimos el paquete
  var nodemailer = require("nodemailer");

  //Creamos el objeto de transporte
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "empresasalutest@gmail.com",
      pass: "S*EjBrx$7XPRkA2Tmku5Yw$yq^VUe#hB5QezEIdsguCGAxk0si",
    },
  });

  var mensaje =
    "Hola " +
    name +
    " te damos la bienvenida Salutest, tu solicitud a sido aprovada a continuación tendras las credenciales de Salutest Management.\nusername: " +
    username +
    "\ncontraseña: " +
    password;

  var mailOptions = {
    from: "empresasalutest@gmail.com",
    to: "jav.tanicuchi@yavirac.edu.ec",
    subject: "Solicitud a Salutest Pack",
    text: mensaje,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });
};

module.exports = email;
