// get a reference to the sms or call radio buttons
var myRadio = document.querySelectorAll('.billItemTypeWithSettings');
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

var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting1 = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var updateSettingsBtn = document.querySelector(".updateSettingsBtn");
var settingsBillAddBtnElem = document.querySelector(".settingsBillAddBtn");

var callsTotals = 0;
var smsTotals = 0;

var callCostTest = 0;
var smsCostTest = 0;
var criticaLevelSetting = 0;
var warningLevelSetting = 0;

function updateBillSettings() {
     warningLevelSetting =  Number(warningLevelSetting1.value);
     criticalLevelSetting = Number(criticalLevelSetting.value);
    
     console.log(warningLevelSetting)
    callCostTest = callCostSetting.value;
    smsCostTest = smsCostSetting.value;


}

function settingBillTotal() {

    callCostTest = callCostSetting.value;
    smsCostTest = smsCostSetting.value;

    for (var i = 0; i < myRadio.length; i++) {
        var elem = myRadio[i];
        if (elem.checked == true) {
            if (elem.value === "call") {
                callsTotals += Number(callCostTest)
            } else if (elem.value === "sms") {
                smsTotals += Number(smsCostTest)


            }

        }

        callTotalSettings.innerHTML = callsTotals.toFixed(2);
        smsTotalSettings.innerHTML = smsTotals.toFixed(2);
        var totalCost = callsTotals + smsTotals;
        totalSettings.innerHTML = totalCost.toFixed(2);
    }

    if (totalCost >= criticalLevelSetting) {
        totalSettings.classList.add("danger");
        settingsBillAddBtnElem.disabled = !settingsBillAddBtnElem.disabled;
    
    }

    else if (totalCost >= warningLevelSetting) {
        totalSettings.classList.add("warning");

    }

   


}

updateSettingsBtn.addEventListener('click', updateBillSettings);
settingsBillAddBtnElem.addEventListener('click', settingBillTotal);
