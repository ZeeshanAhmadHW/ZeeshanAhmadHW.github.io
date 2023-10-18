function unamecheck(){
    uname = document.getElementById("uname");
    unameError = document.getElementById("unameError");
    if (uname.value.length === 0){
        uname.classList.add("error");
        unameError.textcontent = "username field cannot be empty";
    }else {
        uname.classList.remove("error");
        uname.classList.add("success");
        unameError.textcontent = "";
    }
}

function emailcheck(){
    email = document.getElementById("email");
    emailError = document.getElementById("emailError");
    if (email.value.length === 0){
        email.classList.add("error");
        emailError.textcontent = "email field cannot be empty";
    }else if (!(email.includes("@") && email.includes(".com"))){
        email.classList.add("error");
        emailError.textcontent = "email must be in format";
    }else {
        email.classList.remove("error");
        email.classList.add("success");
        emailError.textcontent = "";
    }
}

function passcheck(){
    pass = document.getElementById("pass");
    passError = document.getElementById("passError");
    if (pass.length < 8){
        pass.classList.add("error");
        passError.textcontent = "password must have atleast 8 characters";
    }else {
        pass.classList.remove("error");
        pass.classList.add("success");
        passError.textcontent = "";
    }
}

function conpasscheck(){
    pass = document.getElementById("pass");
    conpass = document.getElementById("conpass");
    conpassError = document.getElementById("conpassError");
    if (pass !== conpass){
        conpass.classList.add("error");
        conpassError.textcontent = "passwords do not match";
    }else {
        conpass.classList.remove("error");
        conpass.classList.add("success");
        conpassError.textcontent = "";
    }

}

function formsubmit(){
    uname = document.getElementById("uname");
    email = document.getElementById("email");
    pass = document.getElementById("pass");
    conpass = document.getElementById("conpass");
    if (uname.classlist.contains("success") && email.classlist.contains("success") && 
        pass.classlist.contains("success") && conpass.classlist.contains("success")){
        window.alert("Form submitted successfully");
    }else {
        window.alert("Form has errors, not submitted");
    }
}