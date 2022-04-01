const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#cpassword");
const form = document.querySelector("form");

let usernamePassed = false;
let emailPassed = false;
let passwordPassed = false;
let confirmPasswordPassed = false;

form.addEventListener("submit", function(eventObj){
    const usernameErrorMsg = document.querySelector(".usernameErrorMsg");
    const emailErrorMsg = document.querySelector(".emailErrorMsg");
    const passwordErrorMsg = document.querySelector(".passwordErrorMsg");
    const confirmPasswordErrorMsg = document.querySelector(".confirmPasswordErrorMsg");

    eventObj.preventDefault();
    if(!isUserNamePresent())
    {
        usernameErrorMsg.innerText = "Username is mandatory";
        usernameErrorMsg.classList.add("error");
        usernamePassed = false;
    }
    else{   
        usernameErrorMsg.innerText = "";
        usernamePassed = true;
    }
    
    if(!isEmailValid()){
        emailErrorMsg.innerText = "Please Enter Valid Email Address";
        emailErrorMsg.classList.add("error");
        emailPassed = false;
    }

    else{
        emailErrorMsg.innerText = "";
        emailPassed = true;
    }

    if(!isPasswordPresent()){
        passwordErrorMsg.innerText = "Please provide a password for your account (atleast length of 6)";
        passwordErrorMsg.classList.add("error");
        passwordPassed = false;
    }

    else{
        passwordErrorMsg.innerText = "";
        passwordPassed = true;
    }

    if(!confirmPasswordNotMatched()){
        confirmPasswordErrorMsg.innerText = "Password do not match";
        confirmPasswordErrorMsg.classList.add("error");
        confirmPasswordPassed = false;
    }
    else{
        confirmPasswordErrorMsg.innerText = "";
        confirmPasswordPassed = true;
    }

    if(usernamePassed && emailPassed && passwordPassed && confirmPasswordPassed)
    {
        document.querySelector(".form-container").classList.add("hide");
        document.querySelector(".details-container").classList.remove("hide");
        
    }
})




function isUserNamePresent()
{
    if(!username.value)
        return false;
    return true;
}


function isEmailValid()
{
    if(!email.value)
        return false;
    return true;
}

function isPasswordPresent()
{
    if(!password.value || password.value.length<6)
        return false;
    return true;
}

function confirmPasswordNotMatched()
{
    if(password.value !== confirmPassword.value)
        return false;
    return true;
}