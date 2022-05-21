const title_module = document.getElementById("title_view");
const input_name_shortcut = document.getElementById("input_name_shortcut");
input_name_shortcut.value = title_module.textContent;

function sidebar_toggle(id) {
  const card_shortcut = document.getElementById("card_shortcut" + id);
  card_shortcut.classList.add("unlink");
}
