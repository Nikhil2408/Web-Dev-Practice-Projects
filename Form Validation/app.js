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
        onError(usernameErrorMsg, "Username must be atleast of length 4 characters");
        usernamePassed = false;
    }
    else{
        onSuccess(usernameErrorMsg);   
        usernamePassed = true;
    }
    
    if(!isEmailValid()){
        onError(emailErrorMsg, "Please Enter Valid Email Address");
        emailPassed = false;
    }

    else{
        onSuccess(emailErrorMsg);
        emailPassed = true;
    }

    if(!isPasswordPresent()){
        onError(passwordErrorMsg, "Password should be atleast of length 6 characters");
        passwordPassed = false;
    }

    else{
        onSuccess(passwordErrorMsg);
        passwordPassed = true;
    }

    if(!confirmPasswordNotMatched()){
        onError(confirmPasswordErrorMsg, "Password do not match");
        confirmPasswordPassed = false;
    }
    else{
        onSuccess(confirmPasswordErrorMsg);
        confirmPasswordPassed = true;
    }

    if(usernamePassed && emailPassed && passwordPassed && confirmPasswordPassed)
    {
        document.querySelector(".form-container").classList.add("hide");
        document.querySelector(".details-container").classList.remove("hide");    
    }
})



function onError(element, message){
    element.innerText = message;
    element.classList.add("error");
    
}

function onSuccess(element){
    element.innerText = "";
}


function isUserNamePresent()
{
    if(!username.value || username.value.length<4)
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