// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo ");
var totalTwo = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    if (billItemType === "call") {
        callsTotal += 2.75
    }
    else if (billItemType === "sms") {
        smsTotal += 0.75;
    }
   
}

    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);



    if (totalCost >= 30) {
        totalTwo.classList.add("warning");
    }
    if (totalCost >= 50) {
        totalTwo.classList.add("danger");
    }

}

radioBillAddBtn.addEventListener('click', radioBillTotal);