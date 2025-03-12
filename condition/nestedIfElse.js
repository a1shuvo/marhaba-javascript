/* 
* Topic: Nested If Else Condition
* Page: 86
* Practice: 1 to 5
*/


// #1
const isInvited = true;
const money = 1000;
if (isInvited) {
    console.log("Go to Birthday Party!");
    if (money > 1000) {
        console.log("With a Gift!");
    } else {
        console.log("Without a Gift!");
    }
} else {
    console.log("Remove from my friendlist.");
}

// #2
const wantTea = true;
const wantBiscuit = false;
if (wantTea) {
    console.log("Want some biscuits?");
    if (!wantBiscuit) {
        console.log("Only Tea Ready!");
    }
} else {
    console.log("Bose Bose Star Jolsha Dekhun!");

}

// #3
const activeUser = true;
const premiumSubscription = false;
if (activeUser) {
    if (premiumSubscription) {
        console.log("Watch Premium Features!");
    } else {
        console.log("Watch Free Version!");
    }
}

// #4
const haveFoodInFridge = false;
const foodDeliveryAppWorking = true;
if (haveFoodInFridge) {
    console.log("Khabar Gorom Kori!");
} else {
    if (foodDeliveryAppWorking) {
        console.log("Order Food!");
    } else {
        console.log("Ajke ami Roja!");
    }
}

// #5
const guestCount = 100;
const allBringsGift = false;
if (guestCount > 100) {
    if (allBringsGift) {
        console.log("Lets party all night!");
    } else {
        console.log("I will party with myself!");
    }
} else {
    console.log("I will party with myself!");
}