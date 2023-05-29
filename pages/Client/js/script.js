

const payBillsButtons = Array.from(document.querySelectorAll(".green-button"));
var currentButton;

function saveButton(button) {
    currentButton = button;
}


function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "client" && password == "client" && true) {
        window.location.href = "../html/home.html";

        return false;
    }
    else {
        alert("Login failed");
    }
}


function submit() {
    alert("Submitted Succesfully");

}

function goToHome() {
    window.location.href = "../html/home.html";
}

function payCreditDue() {

    alert("Payment Successful");


}

function reportLoss() {

    var all = document.getElementById('selectAll');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    if (card1.checked || card2.checked || all.checked) {
        alert("Reported Successfully");
        window.location.href = "../html/cards.html";
    }
    else {
        alert("Please Select a card");
    }

}

function report() {
    alert("Reported Successfully");
    window.location.href = "../html/bills.html";
}

function payBill() {
    const card = document.getElementById("card");
    const acc = document.getElementById("acc");
    // alert(card.value!="")
    if (card.value != "") {

        // const button= document.getElementById("bill1");
        // button.disabled=true;
        alert("Payment Successful");
        var parentElement = currentButton.parentNode;
        var parentElement2 = parentElement.parentNode;
        parentElement2.classList.add("visually-hidden");


    }
    else if (acc.value != "") {


        // const button= document.getElementById("bill1");
        // button.disabled=true;
        alert("Payment Successful");
        var parentElement = currentButton.parentNode;
        var parentElement2 = parentElement.parentNode;
        parentElement2.classList.add("visually-hidden");
    }

    else {
        alert("Please Select a card or account");
    }
}

function transferType() {
    const type = document.getElementById("Transferlist");
    if (type.value == "1") {
        prompt("Enter Bank Name");
    }
    else if (type.value == "2") {
        prompt("Enter Country Name");
        prompt("Enter Bank Name");
    }
}


function transfer() {
    alert("Transfer Completed Successfully");
}

function redeemPoints() {
    var all = document.getElementById('selectAll');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    if (card1.checked || card2.checked || all.checked) {
        prompt("Enter Bank Account Number To recieve the cash On");
        alert("Redeemed Successfully");
        window.location.href = "../html/cards.html";
    }
    else {
        alert("Please Select a card");
    }

}

function reportTransaction() {
    prompt("Enter Transaction Number");
    alert("Reported Successfully");
}

function openAccount() {
    prompt("Savings Or Checking");
    alert("Account Opened Successfully");
    // window.location.href= "../html/account.html";
    var element = document.getElementById("newAccount");
    element.classList.remove("visually-hidden");
}

function closeAccount() {

    var all = document.getElementById('selectAll');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    if (card1.checked || card2.checked || all.checked) {
        alert("Account Closed Successfully");
        window.location.href = "../html/account.html";
    }
    else {
        alert("Please Select an Account");
    }

}

