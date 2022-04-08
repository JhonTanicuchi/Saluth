document.addEventListener('load' , function(){
    document.querySelector("#signup_form").reset();
    document.querySelector("#login_form").reset();
});


//POPUP LOGIN

var buttonOpenLogin = document.getElementById('open_login'), 
containerLogin = document.getElementById('container_login'),
loginPopup = document.getElementById('login_popup');



//POPUP SIGNUP
var openSignup = document.getElementById('open_signup'), 
signupPopup = document.getElementById('signup_popup'),
openLogin = document.getElementById('back_login'),
containerSignup = document.getElementById('container_signup')


//BUTTON OPEN
openSignup.addEventListener('click',function(){
    document.querySelector("#signup_form").reset();
    document.querySelector("#login_form").reset();
    containerLogin.classList.remove('active');
    containerSignup.classList.add('active');
    loginPopup.classList.remove('active');
    signupPopup.classList.add('active');
});


//BACK LOGIN
openLogin.addEventListener('click',function(){
    document.querySelector("#signup_form").reset();
    document.querySelector("#login_form").reset();
    containerLogin.classList.add('active');
    containerSignup.classList.remove('active');
    loginPopup.classList.add('active');
    signupPopup.classList.remove('active');

});


