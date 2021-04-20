const login_form = document.querySelector('#login_form');


login_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email_login = document.querySelector('#email_login').value;
    const password_login = document.querySelector('#password_login').value;

    console.log(email_login, password_login);

})