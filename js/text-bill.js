// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var textTotalAddBtnElem = document.querySelector(".textBillTotal");
var billTypeEntered = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalCost");

var callsTotal1 = 0;
var smsTotal1 = 0;

function textBillTotal() {

    var billTypeEnteredValue = billTypeEntered.value.trim();

    if (billTypeEnteredValue === "call") {
        callsTotal1 += 2.75
    }
    else if (billTypeEnteredValue === "sms") {
        smsTotal1 += 0.75;
    }

    callsTotalElem.innerHTML = callsTotal1.toFixed(2);
    smsTotalElem.innerHTML = smsTotal1.toFixed(2);
    var totalCost = callsTotal1 + smsTotal1;
    totalCostElem.innerHTML = totalCost.toFixed(2);



    if (totalCost >= 30) {
        totalCostElem.classList.add("warning");
    }
    if (totalCost >= 50) {
        totalCostElem.classList.add("danger");
    }

}

addToBillBtn.addEventListener('click', textBillTotal);
