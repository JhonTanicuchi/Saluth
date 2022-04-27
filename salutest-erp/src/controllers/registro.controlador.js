const registro = {};

const passport = require('passport');

registro.mostrarRegistro = (req, res) => {
    res.render('usuarios/login');
};

registro.mostrarLogin = (req, res) => {
    res.render('usuarios/login');
};


registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/home',
    failureRedirect: '/registro',
    failureFlash: true
});

registro.Login = passport.authenticate("local.signin", {
  successRedirect: "/home",
  failureRedirect: "/",
  failureFlash: true,
});

registro.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;