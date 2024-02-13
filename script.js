const form = document.querySelector('.form');
const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e)=>{
    console.log('click');
    e.preventDefault();
    checkInput();
})


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function checkInput(){
    const fNameValue = firstName.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fNameValue === ''){
        setErrorFor(firstName, 'First Name cannot be empty');
    }
 else {

    setSuccesFor(firstName);
}

//Last Name Validation
if (lNameValue === '') {

    setErrorFor(lastName, 'Last Name cannot be empty');
} else {

    setSuccesFor(lastName);
}

//Email validation
if (emailValue === '') {

    setErrorFor(email, 'Email cannot be empty');

} else if (!isEmailValid(emailValue)) {

    setErrorFor(email, 'Looks like this is not an email');

} else {
    setSuccesFor(email);
}

//Password Validation
if (passwordValue === '') {

    setErrorFor(password, 'Password cannot be empty');
} else {

    setSuccesFor(password);
}
}

function isEmailValid(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}