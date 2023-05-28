function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "client" && password == "client" && true) {
        alert("Login successfully");
        window.location.href = "../html/home.html";
        //window.location = "success.html";

        return false;
    }
    else {
        alert("Login failed");
    }
}


function submit(){
    alert("Submitted Succesfully");
    
}

function goToHome(){
    window.location.href="../html/home.html";
}

function payCreditDue(){

    var all= document.getElementById('selectAll');
    var card1= document.getElementById('card1');
    var card2= document.getElementById('card1');
    if(card1.checked || card2.checked || all.checked){
        alert("Payment Successful");
    }
    else{
        alert("Please Select a card");
    }
    window.location.href = "../html/cards.html";

}

function reportLoss(){

    var all= document.getElementById('selectAll');
    var card1= document.getElementById('card1');
    var card2= document.getElementById('card1');
    if(card1.checked || card2.checked || all.checked){
        alert("Report Successful");
    }
    else{
        alert("Please Select a card");
    }
    window.location.href = "../html/cards.html";

}

// function welcome(){
//     if(location.href)
// }

