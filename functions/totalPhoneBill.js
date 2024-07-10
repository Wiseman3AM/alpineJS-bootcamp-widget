 /*Declare variables
--------------------------------------------------------------------------------------------------------------------------------------*/
let callCount = 0;
let smsCount = 0;

const callCO = 2.75;
const smsCO = 0.65;

const total = document.querySelector('.totalCost');
const call = document.querySelector('.call');
const sms = document.querySelector('.sms');

const incrementButton =  document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

const incrementButton1=  document.querySelector('.increment1');
const decrementButton1 = document.querySelector('.decrement1');

const calculateButton = document.querySelector('.Calculate');

/* Declare total phone bill function
--------------------------------------------------------------------------------------------------------------------------------------*/

function totalPhoneBill(callCount, smsCount) {
  const totalBill = (callCount * callCO) + (smsCO * smsCount);
  return `R ${totalBill.toFixed(2)}`; // Return formatted total cost
}


/*Making buttons interactive
--------------------------------------------------------------------------------------------------------------------------------------*/

incrementButton.addEventListener('click', function() {
  callCount++;
  call.innerText = callCount;
});

decrementButton.addEventListener('click', function() {
  callCount--;
  call.innerText = Math.max(callCount - 1, 0);
});


incrementButton1.addEventListener('click', function() {
  smsCount++;
  sms.innerText = smsCount;
});

decrementButton1.addEventListener('click', function() {
  smsCount--;
  sms.innerText = Math.max(smsCount - 1, 0);
});

calculateButton.addEventListener('click', function() {
  const totalCostValue = totalPhoneBill(callCount, smsCount);
  total.innerText = totalCostValue; // Update totalCost innerText
});



