// all variables (buttons)

const fivePercent = document.getElementById('5-percent-btn');
const tenPercent = document.getElementById('10-percent-btn');
const fifteenPercent = document.getElementById('15-percent-btn');
const twentyFivePercent = document.getElementById('25-percent-btn');
const fiftyPercent = document.getElementById('50-percent-btn');
const customPercent = document.getElementById('custom-percent-btn');
const resetBtn = document.getElementById('reset');

// inputs 

var billTotal = document.getElementById('bill-total');
var numberOfPeople = document.getElementById('number-of-people-input');

// total and tip amount 

const tipAmount = document.getElementById('dollar-amount-tip');
const total = document.getElementById('dollar-amount-total');

// custom tip function 
customPercent.addEventListener('click', function(userInput){
    let customTip = parseInt(prompt("Enter tip amount"));
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tipPerPerson = customTip / numOfPeople
    tipAmount.innerText = `$${tipPerPerson}`;
    let totalPerPerson = (bill + customTip) / numOfPeople;
    total.innerText = `$${totalPerPerson}`;




    
    if (isNaN(customTip)) {
        alert('Tip can only be a number!')
        tipAmount.innerText = `$0`;
        total.innerText = `$0`;
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }

    
});




// percentage function to add tip 3

