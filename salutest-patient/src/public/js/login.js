document.addEventListener("load", function () {
  document.querySelector("#signup_form").reset();
  document.querySelector("#login_form").reset();
});

//POPUP SIGNUP
var openSignup = document.getElementById("open_signup"),
  openLogin = document.getElementById("back_login"),
  hexagon_svg = document.getElementById("hexagon_svg"),
  contenido_left = document.getElementById("section_login_left"),
  contenido_right = document.getElementById("section_login_right"),
  section_login = document.getElementById("section_login"),
  info_l = document.getElementById("l"),
  info_r = document.getElementById("r");

//BUTTON OPEN
openSignup.addEventListener("click", function () {
  document.querySelector("#login_form").reset();
  hexagon_svg.classList.toggle("active");

  contenido_left.classList.add("ocultar");
  info_r.classList.remove("info-visible");
  info_l.classList.add("info-visible");

  setTimeout(function () {
    section_login.style.gridTemplateColumns =
      "calc(40% - 50px) calc(60% + 50px)";
  }, 1000);
  setTimeout(function () {
    contenido_right.classList.remove("ocultar");
  }, 850);
});

//BACK LOGIN
openLogin.addEventListener("click", function () {
  document.querySelector("#login_form").reset();
  hexagon_svg.classList.toggle("active");

  contenido_right.classList.add("ocultar");
  info_l.classList.remove("info-visible");
  info_r.classList.add("info-visible");

  setTimeout(function () {
    section_login.style.gridTemplateColumns = "50% 50%";
  }, 1000);
  setTimeout(function () {
    contenido_left.classList.remove("ocultar");
  }, 850);
});
