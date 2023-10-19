function unamecheck(){
    var uname = document.getElementById("uname");
    var unameError = document.getElementById("unameError");
    if (uname.value.length === 0){
        uname.classList.add("error");
        unameError.textContent = "username field cannot be empty";
    }else {
        uname.classList.remove("error");
        uname.classList.add("success");
        unameError.textContent = "";
    }
}

function emailcheck(){
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    if (email.value.length === 0){
        email.classList.add("error");
        emailError.textContent = "email field cannot be empty";
    }else if (!(email.includes("@") && email.includes(".com"))){
        email.classList.add("error");
        emailError.textContent = "email must be in format";
    }else {
        email.classList.remove("error");
        email.classList.add("success");
        emailError.textContent = "";
    }
}

function passcheck(){
    var pass = document.getElementById("pass");
    var passError = document.getElementById("passError");
    if (pass.length < 8){
        pass.classList.add("error");
        passError.textContent = "password must have atleast 8 characters";
    }else {
        pass.classList.remove("error");
        pass.classList.add("success");
        passError.textContent = "";
    }
}

function conpasscheck(){
    var pass = document.getElementById("pass");
    var conpass = document.getElementById("conpass");
    var conpassError = document.getElementById("conpassError");
    if (pass != conpass){
        conpass.classList.add("error");
        conpassError.textContent = "passwords do not match";
    }else {
        conpass.classList.remove("error");
        conpass.classList.add("success");
        conpassError.textContent = "";
    }

}

function formsubmit(){
    var uname = document.getElementById("uname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var conpass = document.getElementById("conpass");
    if (uname.classList.contains("success") && email.classList.contains("success") && 
        pass.classList.contains("success") && conpass.classList.contains("success")){
        window.alert("Form submitted successfully");
    }else {
        window.alert("Form has errors, not submitted");
    }
}