var form = document.querySelector('.form');
var input = document.querySelectorAll('.input');
var validateBtn = form.querySelector('.submit');
var firstName = form.querySelector('.firstName');
var lastName = form.querySelector('.lastName');
var age = form.querySelector('.age');
var email = form.querySelector('.email');
var password = form.querySelector('.password');
var btn = form.querySelector('.submit');
var fields = form.querySelectorAll('.field');

// const checkLength = function(evt) {
//     if(password.value.length >= 5)
//     btn.removeAttribute('disabled')
//     }


// form.addEventListener('keyup', checkLength);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailVal = email.value;
    var passwordVal = password.value;

    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    var errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()      
    };

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            var error = document.createElement('div')
            error.className = 'error'
            error.innerHTML = 'Cannot be blank'
            form[i].parentElement.appendChild(error, fields[i])
        }         
    };
    if(regEmail.test(emailVal) === false) {
        error = document.createElement('div')
        error.className = 'error'
        error.innerHTML = 'Not valid...'
        email.parentElement.append(error)
        return false
    };
    if(regPassword.test(passwordVal) === false) {
        error = document.createElement('div')
        error.className = 'error'
        error.innerHTML = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        password.parentElement.append(error)
        return false
    };

});