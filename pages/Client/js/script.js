

const payBillsButtons = Array.from(document.querySelectorAll(".green-button"));
const swal = require('sweetalert2')


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
    var card2= document.getElementById('card2');
    if(card1.checked || card2.checked || all.checked){
        prompt("Enter Bank Account Number For Payment");
        prompt("Enter Amount");
        alert("Payment Successful");
        window.location.href = "../html/cards.html";
    }
    else{
        alert("Please Select a card");
    }
    

}

function reportLoss(){

    var all= document.getElementById('selectAll');
    var card1= document.getElementById('card1');
    var card2= document.getElementById('card2');
    if(card1.checked || card2.checked || all.checked){
        alert("Reported Successfully");
        window.location.href = "../html/cards.html";
    }
    else{
        alert("Please Select a card");
    }

}

function report(){
    alert("Reported Successfully");
    window.location.href = "../html/bills.html";
}

function payBill(){
    const card= document.getElementById("card");
    const acc= document.getElementById("acc");
    const amountC= document.getElementById("amountC");
    const amountB= document.getElementById("amountB");
    // alert(card.value!="")
    if(card.value!=""){
        if(amountC.value==""){
            alert("Please Enter Amount");
        }
        else{
            // const button= document.getElementById("bill1");
            // button.disabled=true;
            alert("Payment Successful");
            
        }
    }
    else if(acc.value!=""){
        if(amountB.value==""){
            alert("Please Enter Amount");
        }
        else{
            // const button= document.getElementById("bill1");
            // button.disabled=true;
            alert("Payment Successful");
        }
    }

    else{
        alert("Please Select a card or account");
    }
}

function transferType(){
    const type= document.getElementById("Transferlist");
    if(type.value=="1"){
        prompt("Enter Bank Name");
    }
    else if(type.value=="2"){
        prompt("Enter Country Name");
        prompt("Enter Bank Name");
    }
}


function transfer(){
    alert("Transfer Completed Successfully");
}

function redeemPoints(){
    var all= document.getElementById('selectAll');
    var card1= document.getElementById('card1');
    var card2= document.getElementById('card2');
    if(card1.checked || card2.checked || all.checked){
        prompt("Enter Bank Account Number To recieve the cash On");
        alert("Redeemed Successfully");
        window.location.href = "../html/cards.html";
    }
    else{
        alert("Please Select a card");
    }

}

function reportTransaction(){
    prompt("Enter Transaction Number");
    alert("Reported Successfully");
}

