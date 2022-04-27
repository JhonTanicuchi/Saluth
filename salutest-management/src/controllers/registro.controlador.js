const registro = {};

const passport = require('passport');
const user_admin = require("../lib/user_admin");

registro.mostrarRegistro = (req, res) => {
    res.render('usuarios/login');
};

registro.mostrarLogin = (req, res) => {
    res.render('usuarios/login');
    user_admin.new_user();

};


registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/home',
    failureRedirect: '/registro',
    failureFlash: true
});

<<<<<<< HEAD:salutest-business/src/controllers/registro.controlador.js
registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
=======
registro.Login = passport.authenticate("local.signin", {
  successRedirect: "/home",
  failureRedirect: "/",
  failureFlash: true,
>>>>>>> 052a5d56dcc78f6eac17af974871f1c995229163:salutest-management/src/controllers/registro.controlador.js
});

registro.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;