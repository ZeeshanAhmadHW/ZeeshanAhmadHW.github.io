function unamecheck(){
    uname = document.getElementById("uname").value;
    if (uname.length === 0){
        document.getElementById("uname").classList.add("error");
        document.getElementById("unameerror").innerHTML = "username field cannot be empty";
    }else {
        document.getElementById("uname").classList.remove("error");
        document.getElementById("uname").classList.add("success");
        document.getElementById("unameerror").innerHTML = "";
    }
}

function emailcheck(){
    email = document.getElementById("email").value;
    if (email.length === 0){
        document.getElementById("email").classList.add("error");
        document.getElementById("emailerror").innerHTML = "email field cannot be empty";
    }else if (email.includes("@") && email.includes(".com")){
        document.getElementById("email").classList.add("error");
        document.getElementById("emailerror").innerHTML = "email must be in format";
    }else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("email").classList.add("success");
        document.getElementById("emailerror").innerHTML = "";
    }
}

function passcheck(){
    pass = document.getElementById("pass").value;
    if (uname.length < 8){
        document.getElementById("pass").classList.add("error");
        document.getElementById("passerror").innerHTML = "password must have atleast 8 characters";
    }else {
        document.getElementById("pass").classList.remove("error");
        document.getElementById("pass").classList.add("success");
        document.getElementById("passerror").innerHTML = "";
    }
}

function conpasscheck(){
    pass = document.getElementById("pass").value;
    conpass = document.getElementById("conpass").value;
    if (pass != conpass){
        document.getElementById("conpass").classList.add("error");
        document.getElementById("conpasserror").innerHTML = "passwords do not match";
    }else {
        document.getElementById("conpass").classList.remove("error");
        document.getElementById("conpass").classList.add("success");
        document.getElementById("conpasserror").innerHTML = "";
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