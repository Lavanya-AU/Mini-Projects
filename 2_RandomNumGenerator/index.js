let Button = document.getElementById("myButton");
let label = document.getElementById("myLabel");
const min = 50;
const max = 100;

Button.onclick = function(){
    label.textContent = Math.round(Math.random() * min) + 1
}

// .checked --> a property that determine the checked status
//              of an HTML checkbox or a radio Button

let mySub = document.getElementById("mySub");
let visa = document.getElementById("visa");
let masterCard = document.getElementById("masterCard");
let payPal = document.getElementById("payPal");
let mySubmit = document.getElementById("mySubmit");
let subRes = document.getElementById("subRes");
let paymentRes = document.getElementById("paymentRes");

mySubmit.onclick = function(){
    if(mySub.checked){
        subRes.textContent = `You are Subscibed`
    }
    else{
        subRes.textContent = `You are NOT Subscibed`
    }
    if(visa.checked){
        paymentRes.textContent = `You have selected visa payment`
    }
    else if(masterCard.checked){
        paymentRes.textContent = `You have selected masterCard payment`
    }
    else if(payPal.checked){
        paymentRes.textContent = `You have selected payPal payment`
    }
    else{
        paymentRes.textContent = `You should select payment option`
    }
}

