//POPUP LOGIN

var buttonOpenLogin = document.getElementById('open_login'), 
buttonCloseLogin = document.getElementById('close_login'),
overlay = document.getElementById('overlay'),
containerLogin = document.getElementById('container_login'),
loginPopup = document.getElementById('login_popup')

//BUTTON OPEN
buttonOpenLogin.addEventListener('click',function(){
    overlay.classList.add('active');
    containerLogin.classList.add('active');
    loginPopup.classList.add('active');
    document.body.classList.add('scroll');
});

//BUTTON CLOSE
buttonCloseLogin.addEventListener('click',function(){
    overlay.classList.remove('active');
    containerLogin.classList.remove('active');
    loginPopup.classList.remove('active');
    document.body.classList.remove('scroll');
});







//POPUP SIGNUP

var openSignup = document.getElementById('open_signup'), 
closeSignup = document.getElementById('close_signup'),
signupPopup = document.getElementById('signup_popup'),
openLogin = document.getElementById('back_login'),
containerSignup = document.getElementById('container_signup')


//BUTTON OPEN
openSignup.addEventListener('click',function(){
    containerLogin.classList.remove('active');
    containerSignup.classList.add('active');
    loginPopup.classList.remove('active');
    signupPopup.classList.add('active');
});

//BUTTON CLOSE
closeSignup.addEventListener('click',function(){
    containerLogin.classList.add('active');
    containerSignup.classList.remove('active');
    loginPopup.classList.add('active');
    signupPopup.classList.remove('active');
});

//BACK LOGIN
openLogin.addEventListener('click',function(){
    containerLogin.classList.add('active');
    containerSignup.classList.remove('active');
    loginPopup.classList.add('active');
    signupPopup.classList.remove('active');

});







//POPUP SIGNUP GOOD

var signupForm = document.getElementById('signup_form'), 
closeSignupGood = document.getElementById('close_signup_good'),
signupGood = document.getElementById('signup_good_popup'),
containerSignupGood = document.getElementById('container_signup_good')


//BUTTON OPEN
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    containerSignup.classList.remove('active');
    signupPopup.classList.remove('active');
    containerSignupGood.classList.add('active');
    signupGood.classList.add('active');
});

//BUTTON CLOSE
closeSignupGood.addEventListener('click',function(){
    containerSignupGood.classList.remove('active');
    signupGood.classList.remove('active');
    overlay.classList.remove('active');
});


