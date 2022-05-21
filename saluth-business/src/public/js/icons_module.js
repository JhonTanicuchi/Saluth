function icons_filter() {
    const input = document.getElementById("icono_modulo");
    const view_icon_module = document.getElementById("view_icon_module");
    let lib_icons = "las la-";
    let filter = input.value;
    view_icon_module.classList = lib_icons + filter;
    console.log(filter)
}