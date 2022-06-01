var inputFile_avatar = document.getElementById("inputFile_avatar");
var error_avatar = document.getElementById("error_avatar_text");
var container_error_avatar = document.getElementById("error_avatar");

var files;
inputFile_avatar.addEventListener("change", (e) => {
  files = this.files;
  data_img_avatar.classList.add("input_active");
  showFiles(files);
  data_img_avatar.classList.remove("input_active");
});

var data_img_avatar = document.getElementById("data_img_avatar");

const list_nodes = countElement(data_img_avatar.children);
list_nodes.unshift(data_img_avatar);
console.log(list_nodes);

data_img_avatar.addEventListener("dragover", (e) => {
  e.preventDefault();

  data_img_avatar.classList.add("input_active");
});

data_img_avatar.addEventListener("dragleave", (e) => {
  e.preventDefault();
  data_img_avatar.classList.remove("input_active");
});

data_img_avatar.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  showFiles(files);
  data_img_avatar.classList.remove("input_active");
});

function showFiles(files) {
  if (files.length > 1) {
    error_avatar.textContent = "Solo se admite una imagen";
    container_error_avatar.classList.add("err");
  } else {
    processFile(files[0]);
  }
}

function processFile(file) {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(docType)) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = document.getElementById("img_avatar");
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    container_error_avatar.classList.remove("err");
  } else {
    error_avatar.textContent = "Formato incorrecto";
    container_error_avatar.classList.add("err");
  }
}
