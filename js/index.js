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
    let tipPerPerson = (customTip / numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    let totalPerPerson = ((bill + customTip) / numOfPeople).toFixed(2);
    total.innerText = `$${totalPerPerson}`;

    
   



    if (isNaN(customTip)) {
        alert('Tip can only be a number!')
        tipAmount.innerText = `$0`;
        total.innerText = `$0`;   
    } else if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }

    
    });



// reset function 

resetBtn.addEventListener('click', function(){
    billTotal.value = ''
    numberOfPeople.value = ''
    tipAmount.innerText = `$0`;
    total.innerText = `$0`; 
})


// 5%  function to add tip 

fivePercent.addEventListener('click', function () {
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tip = (0.05 * bill);
    let tipPerPerson = (tip/numOfPeople).toFixed(2);
    let totalPerPerson = ((tip + bill)/numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    total.innerText = `$${totalPerPerson}`;




    if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }
});


// 10%  function to add tip 

tenPercent.addEventListener('click', function () {
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tip = (0.1 * bill);
    let tipPerPerson = (tip/numOfPeople).toFixed(2);
    let totalPerPerson = ((tip + bill)/numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    total.innerText = `$${totalPerPerson}`;




    if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }
});


// 15%  function to add tip 

fifteenPercent.addEventListener('click', function () {
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tip = (0.15 * bill);
    let tipPerPerson = (tip/numOfPeople).toFixed(2);
    let totalPerPerson = ((tip + bill)/numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    total.innerText = `$${totalPerPerson}`;




    if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }
});

// 25%  function to add tip 

twentyFivePercent.addEventListener('click', function () {
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tip = (0.25 * bill);
    let tipPerPerson = (tip/numOfPeople).toFixed(2);
    let totalPerPerson = ((tip + bill)/numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    total.innerText = `$${totalPerPerson}`;




    if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }
});

// 50%  function to add tip 

fiftyPercent.addEventListener('click', function () {
    let bill = parseInt(billTotal.value);
    let numOfPeople = parseInt(numberOfPeople.value);
    let tip = (0.5 * bill);
    let tipPerPerson = (tip/numOfPeople).toFixed(2);
    let totalPerPerson = ((tip + bill)/numOfPeople).toFixed(2);
    tipAmount.innerText = `$${tipPerPerson}`;
    total.innerText = `$${totalPerPerson}`;




    if (isNaN(bill) || bill === 0) {
        alert ('Enter bill amount!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else if (isNaN(numOfPeople) || numOfPeople === 0) {
        alert ('Enter number of people!');
        tipAmount.innerText = `$0`;
        total.innerText = `$0`; 
    } else {
        tipAmount.innerText = `$${tipPerPerson}`;
        total.innerText = `$${totalPerPerson}`;
    }
});