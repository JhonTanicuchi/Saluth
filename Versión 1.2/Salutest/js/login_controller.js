var login = false;



window.addEventListener('load', function(){
    var menuH = document.querySelector('#btn_H'), 
    chatH = document.querySelector('#inquiries'),
    modules = document.querySelector('#modules'),
    profile = document.querySelector('#profile'),
    search = document.querySelector('#contect_search'),
    login_false = document.querySelector('#login_false');

    if (login == true) {
        menuH.classList.remove('disable');
        chatH.classList.remove('disable');
        search.classList.remove('disable');
        profile.classList.remove('disable');
        login_false.classList.add('disable');
        modules.classList.remove('enable');
    }
});
