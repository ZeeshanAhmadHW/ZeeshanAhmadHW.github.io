function unamecheck(){
    uname = document.getElementById("uname").value;
    if (uname.length === 0){
        document.getElementById("uname").classList.add("error");
        document.getElementById("unameError").textcontent = "username field cannot be empty";
    }else {
        document.getElementById("uname").classList.remove("error");
        document.getElementById("uname").classList.add("success");
        document.getElementById("unameError").textcontent = "";
    }
}

function emailcheck(){
    email = document.getElementById("email").value;
    if (email.length === 0){
        document.getElementById("email").classList.add("error");
        document.getElementById("emailError").textcontent = "email field cannot be empty";
    }else if (email.includes("@") && email.includes(".com")){
        document.getElementById("email").classList.add("error");
        document.getElementById("emailError").textcontent = "email must be in format";
    }else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("email").classList.add("success");
        document.getElementById("emailError").textcontent = "";
    }
}

function passcheck(){
    pass = document.getElementById("pass").value;
    if (uname.length < 8){
        document.getElementById("pass").classList.add("error");
        document.getElementById("passError").textcontent = "password must have atleast 8 characters";
    }else {
        document.getElementById("pass").classList.remove("error");
        document.getElementById("pass").classList.add("success");
        document.getElementById("passError").textcontent = "";
    }
}

function conpasscheck(){
    pass = document.getElementById("pass").value;
    conpass = document.getElementById("conpass").value;
    if (pass != conpass){
        document.getElementById("conpass").classList.add("error");
        document.getElementById("conpassError").textcontent = "passwords do not match";
    }else {
        document.getElementById("conpass").classList.remove("error");
        document.getElementById("conpass").classList.add("success");
        document.getElementById("conpassError").textcontent = "";
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