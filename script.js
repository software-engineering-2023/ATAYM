function login(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        alert("Login successfully");
        //window.location = "success.html";
        return false;
    }
    else{
        alert("Login failed");
    }
}