/* NAV LISTA ACTIVA */
var list_li = document.querySelectorAll(".list");
var list_title = document.getElementsByClassName("title_modules");
var title_modules = document.getElementById("title_view");

for (let i = 0; i < list_li.length; i++) {
  if (list_title[i].textContent == title_modules.textContent) {
    list_li[i].className = "list active";
  }
}

/* MENU NAVEGACION */
let toggle = document.getElementById("toggle");
let sidebar = document.getElementById("sidebar");
var title_header_nav = document.getElementById("title_header_nav");
var title_footer_nav = document.getElementById("title_footer_nav");
var titles_modules_nav = document.querySelectorAll("#title_modules_nav");

if (sessionStorage.getItem("nav_toggle") == 0) {
  sidebar.classList.add("active");
  title_header_nav.classList.add("visuallyhidden");
  title_header_nav.addEventListener(
    "transitionend",
    function (e) {
      title_header_nav.classList.add("hidden");
    },
    {
      capture: false,
      once: true,
      passive: false,
    }
  );
  title_footer_nav.classList.add("visuallyhidden");
  title_footer_nav.addEventListener(
    "transitionend",
    function (e) {
      title_footer_nav.classList.add("hidden");
    },
    {
      capture: false,
      once: true,
      passive: false,
    }
  );
  for (let i = 0; i < titles_modules_nav.length; i++) {
    titles_modules_nav[i].classList.add("visuallyhidden");
    titles_modules_nav[i].addEventListener(
      "transitionend",
      function (e) {
        titles_modules_nav[i].classList.add("hidden");
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
  }
} else {
  sidebar.classList.remove("active");
  title_header_nav.classList.remove("hidden");
  setTimeout(function () {
    title_header_nav.classList.remove("visuallyhidden");
  }, 20);
  title_footer_nav.classList.remove("hidden");
  setTimeout(function () {
    title_footer_nav.classList.remove("visuallyhidden");
  }, 20);
  for (let i = 0; i < titles_modules_nav.length; i++) {
    titles_modules_nav[i].classList.remove("hidden");
    setTimeout(function () {
      titles_modules_nav[i].classList.remove("visuallyhidden");
    }, 20);
  }
}

var num = sessionStorage.getItem("nav_toggle");

toggle.onclick = function sidebar_toggle() {
  num++;
  if (num == 2) {
    num = 0;
  }

  sidebar.classList.toggle("active");
  sessionStorage.setItem("nav_toggle", num);

  if (sessionStorage.getItem("nav_toggle") == 0) {
    sidebar.classList.add("active");
    title_header_nav.classList.add("visuallyhidden");
    title_header_nav.addEventListener(
      "transitionend",
      function (e) {
        title_header_nav.classList.add("hidden");
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
    title_footer_nav.classList.add("visuallyhidden");
    title_footer_nav.addEventListener(
      "transitionend",
      function (e) {
        title_footer_nav.classList.add("hidden");
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
    for (let i = 0; i < titles_modules_nav.length; i++) {
      titles_modules_nav[i].classList.add("visuallyhidden");
      titles_modules_nav[i].addEventListener(
        "transitionend",
        function (e) {
          titles_modules_nav[i].classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  } else {
    sidebar.classList.remove("active");
    title_header_nav.classList.remove("hidden");
    setTimeout(function () {
      title_header_nav.classList.remove("visuallyhidden");
    }, 20);
    title_footer_nav.classList.remove("hidden");
    setTimeout(function () {
      title_footer_nav.classList.remove("visuallyhidden");
    }, 20);
    for (let i = 0; i < titles_modules_nav.length; i++) {
      titles_modules_nav[i].classList.remove("hidden");
      setTimeout(function () {
        titles_modules_nav[i].classList.remove("visuallyhidden");
      }, 20);
    }
  }
};

var toggle_menu_profile = document.getElementById("toggle_menu_profile");
var img_toggle_menu_profile = document.getElementById(
  "img_toggle_menu_profile"
);
var menu_profile = document.getElementById("menu_profile");

var menu_profile_sidebar_footer = document.getElementById(
  "menu_profile_sidebar_footer"
);
var menu_profile_list = document.getElementById("menu_profile_list");
var menu_profile_footer = document.getElementById("menu_profile_footer");

toggle_menu_profile.onclick = function () {
  toggle_Menu();
};
img_toggle_menu_profile.onclick = function () {
  toggle_Menu();
};

function toggle_Menu() {
  if (menu_profile.classList.contains("hidden")) {
    menu_profile.classList.remove("hidden");
    menu_profile.classList.remove("visuallyhidden");
    setTimeout(function () {
      menu_profile.classList.add("menu_active");
    }, 10);
  } else {
    menu_profile.classList.remove("menu_active");
    setTimeout(function () {
      menu_profile.classList.add("visuallyhidden");
      menu_profile.classList.add("hidden");
    }, 400);
  }
}

var childs = menu_profile;
var listaNodes = countElement(childs.children);

document.addEventListener(
  "click",
  function (e) {
    var clic = e.target;
    var clicMenu = false;
    for (let i = 0; i < listaNodes.length; i++) {
      if (clic == listaNodes[i]) {
        clicMenu = true;
      }
    }
    if (
      menu_profile.classList.contains("menu_active") &&
      clic != menu_profile &&
      clic != toggle_menu_profile &&
      clic != img_toggle_menu_profile &&
      clicMenu == false
    ) {
      menu_profile.classList.remove("menu_active");
      setTimeout(function () {
        menu_profile.classList.add("visuallyhidden");
        menu_profile.classList.add("hidden");
      }, 400);
    }
  },
  false
);

function countElement(parent) {
  var listNodes = [];
  if (parent) {
    for (let child = 0; child < parent.length; child++) {
      listNodes.push(parent[child]);
      var ResNodes = countElement(parent[child].children);
      for (let element = 0; element < ResNodes.length; element++) {
        listNodes.push(ResNodes[element]);
      }
    }
    return listNodes;
  } else {
    return listNodes;
  }
}


/* NAV PROFILE LI ACTIVA */
var list_li_profile = document.querySelectorAll(".list_profile");
var list_title_profile = document.getElementsByClassName("title_li_profile");
var title_view_profile = document.getElementById("title_view_profile");

for (let i = 0; i < list_li.length; i++) {
  if (list_title_profile[i].textContent == title_view_profile.textContent) {
    list_li_profile[i].className = "list active";
  }
}