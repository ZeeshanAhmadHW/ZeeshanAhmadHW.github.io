//function to check that username field is not empty
function unamecheck(){
    var uname = document.getElementById("uname");
    var unameError = document.getElementById("unameError");
    var borderColor = document.getElementById("unameField");
    if (uname.value.length === 0){
        borderColor.classList.remove("success");
        borderColor.classList.add("error");
        unameError.textContent = "username field cannot be empty";
    }else {
        borderColor.classList.remove("error");
        borderColor.classList.add("success");
        unameError.textContent = "";
    }
}

//function to check that email field is not empty and email follows proper format
function emailcheck(){
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var borderColor = document.getElementById("emailField");
    if (email.value.length === 0){
        borderColor.classList.remove("success");
        borderColor.classList.add("error");
        emailError.textContent = "email field cannot be empty";
    }else if (!(email.value.includes("@") && email.value.includes(".com"))){
        borderColor.classList.remove("success");
        borderColor.classList.add("error");
        emailError.textContent = "email must be in format";
    }else {
        borderColor.classList.remove("error");
        borderColor.classList.add("success");
        emailError.textContent = "";
    }
}

//function to check that password is atleast 8 characters long
function passcheck(){
    var pass = document.getElementById("pass");
    var passError = document.getElementById("passError");
    var borderColor = document.getElementById("passField");
    if (pass.value.length < 8){
        borderColor.classList.remove("success");
        borderColor.classList.add("error");
        passError.textContent = "password must have atleast 8 characters";
    }else {
        borderColor.classList.remove("error");
        borderColor.classList.add("success");
        passError.textContent = "";
    }
}

//function to confirm the password
function conpasscheck(){
    var pass = document.getElementById("pass");
    var conpass = document.getElementById("conpass");
    var conpassError = document.getElementById("conpassError");
    var borderColor = document.getElementById("conpassField");
    if (pass.value != conpass.value){
        borderColor.classList.remove("success");
        borderColor.classList.add("error");
        conpassError.textContent = "passwords do not match";
    }else {
        borderColor.classList.remove("error");
        borderColor.classList.add("success");
        conpassError.textContent = "";
    }

}

//function to check that the form is properly filled in for submission
function formsubmit(){
    var uname = document.getElementById("unameField");
    var email = document.getElementById("emailField");
    var pass = document.getElementById("passField");
    var conpass = document.getElementById("conpassField");
    if (uname.classList.contains("success") && email.classList.contains("success") && 
        pass.classList.contains("success") && conpass.classList.contains("success")){
        window.alert("Form submitted successfully");
    }else {
        window.alert("Form has errors, not submitted");
    }
}