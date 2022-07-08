var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");
var message = document.getElementById("message");

function confirmPass()
{
    password = document.getElementById("password");
    confirm_password = document.getElementById("confirm-password");
    if(password.value === confirm_password.value)
    {
        message.style.visibility = "hidden";
        password.classList.remove("error");
        confirm_password.classList.remove("error");
    }
    else 
    {
        message.style.visibility = "visible";
        password.classList.add("error");
        confirm_password.classList.add("error");
    }
}
if(password && confirm_password){
    password.addEventListener('click', confirmPass);
    confirm_password.addEventListener('click', confirmPass);
    password.addEventListener('focusout', confirmPass);
    confirm_password.addEventListener('focusout', confirmPass);
    password.addEventListener('onkeydown', confirmPass);
    confirm_password.addEventListener('onkeydown', confirmPass);
}