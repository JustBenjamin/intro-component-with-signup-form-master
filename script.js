const form = document.querySelector("form")
const fname = document.getElementById("firstname")
const lname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")


const fnameIcon = document.getElementById("firstname-icon")
const lnameIcon = document.getElementById("lastname-icon")
const emailIcon = document.getElementById("email-icon")
const passwordIcon = document.getElementById("password-icon")

const fnameError = document.getElementById("firstname-error")
const lnameError = document.getElementById("lastname-error")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")

form.addEventListener("submit", (event) => {

    if (fname.value === "") {
        fnameError.innerHTML = "First Name cannot be empty";
        fname.style.borderColor = "#FF7979";
        fnameIcon.style.visibility = "visible"
    } 
    
    if (lname.value === "") {
        lnameError.innerHTML = "Last Name cannot be empty"
        lname.style.borderColor = "#FF7979";
        lnameIcon.style.visibility = "visible"
    }

    if (email.value === "") {
        emailError.innerHTML = "Email cannot be empty"
        email.style.borderColor = "#FF7979";
        emailIcon.style.visibility = "visible"
    } else if (email.validity.typeMismatch) {
        emailError.innerHTML = "Looks like this is not an email"
        email.style.borderColor = "#FF7979";
        emailIcon.style.visibility = "visible"
    }

    if (password.value === "") {
        passwordError.innerHTML = "Password cannot be empty"
        password.style.borderColor = "#FF7979";
        passwordIcon.style.visibility = "visible"
        submit.style.marginTop = "1.5rem"
    }


    event.preventDefault();
});






 