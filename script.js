function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin" && true) {
        alert("Login successfully");
        window.location.href = "pages/Client/client.html";
        //window.location = "success.html";

        return false;
    }
    else {
        alert("Login failed");
    }
}
document.getElementById("fname").textContent = username;