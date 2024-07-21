// Declare variables
let callCount = 0;
let smsCount = 0;

const callCO = 2.75;
const smsCO = 0.65;

const totalCostElement = document.querySelector('.totalCost');
const callElement = document.querySelector('.call');
const smsElement = document.querySelector('.sms');
const balanceInput = document.querySelector('.balanceInput');
const remainingBalanceElement = document.querySelector('.remainingBalance');

const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const incrementButton1 = document.querySelector('.increment1');
const decrementButton1 = document.querySelector('.decrement1');
const calculateButton = document.querySelector('.Calculate');

// Declare total phone bill function
function totalPhoneBill(callCount, smsCount) {
    const totalBill = (callCount * callCO) + (smsCO * smsCount);
    return totalBill; // Return total cost
}

// Update the displayed values
function updateDisplay() {
    callElement.innerText = callCount;
    smsElement.innerText = smsCount;
}

// Handle button clicks
incrementButton.addEventListener('click', () => {
    callCount++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    callCount = Math.max(callCount - 1, 0);
    updateDisplay();
});

incrementButton1.addEventListener('click', () => {
    smsCount++;
    updateDisplay();
});

decrementButton1.addEventListener('click', () => {
    smsCount = Math.max(smsCount - 1, 0);
    updateDisplay();
});

// Calculate the total cost and remaining balance
calculateButton.addEventListener('click', () => {
    const totalCost = totalPhoneBill(callCount, smsCount);
    const availableBalance = parseFloat(balanceInput.value) || 0;
    const remainingBalance = availableBalance - totalCost;

    totalCostElement.innerText = `R ${totalCost.toFixed(2)}`;
    remainingBalanceElement.innerText = `R ${remainingBalance.toFixed(2)}`;
});
