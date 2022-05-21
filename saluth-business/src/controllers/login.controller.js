const passport = require("passport");

const login = {};

login.show_login = (req, res) => {
  res.render("users/login");
};

login.login = passport.authenticate("local.signin", {
  successRedirect: "/home",
  failureRedirect: "/",
  failureFlash: true,
});

login.logout = (req, res) => {
  req.logOut();
  res.redirect("/");
};

module.exports = login;
