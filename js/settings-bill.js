// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

// var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalCost");
var updateSettings = document.querySelector(".updateSettings");
// var billItemType = document.querySelector(".billItemType");
// var warningLevelSetting = document.querySelector(".warningLevelSetting");
// var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var settingsAddBtn = document.querySelector(".settingsAddBtn");

var callsTotals = 0;
var smsTotals = 0;

function settingsBillTotal() {



    if (billItemType === "call") {
        callsTotals += 2.75
    }
    else if (billItemType === "sms") {
        smsTotals += 0.75;
    }

    callTotalSettings.innerHTML = callsTotals.toFixed(2);
    smsTotalSettings.innerHTML = smsTotals.toFixed(2);
    var totalCost = callsTotals + smsTotals;
    totalSettings.innerHTML = totalCost.toFixed(2);


    // if (totalCost >= 65) {
    //     totalSettings.classList.add("danger");
    // }
    // if (totalCost >= 30) {
    //     totalSettings.classList.add("warning");
    // }

}

updateSettings.addEventListener('click', settingsBillTotal);