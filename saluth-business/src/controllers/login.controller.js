const passport = require("passport");
const user_admin = require("../lib/user_admin");

const login = {};

login.show_login = (req, res) => {
  res.render("users/login");
  user_admin.new_user();
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
