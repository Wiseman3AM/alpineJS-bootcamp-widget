/* Declare variables
--------------------------------------------------------------------------------------------------------------------------------------*/

const morning = "R100";
const afternoon = "R50";
const night = "free";

const radios = Array.from(document.querySelectorAll('input[name="transport"]'));

const costButton = document.querySelector('.calculateCost');
const transportCost = document.querySelector('.transportCost');

/* Function to set transport fee based on radio button selection
--------------------------------------------------------------------------------------------------------------------------------------*/

function setTransportFee() {
  radios.forEach((radio, index) => {
    radio.value = ['m', 'd', 'n'][index]; // Set value based on index
  });

  const selectedRadio = radios.find(radio => radio.checked); // Find the checked radio button
  if (selectedRadio) {
    const timeOfDay = selectedRadio.value; // Get the value of the checked radio button
    transportCost.innerText = transportFee(timeOfDay); // Update transport cost text
  } else {
    transportCost.innerText = ""; // Clear transport cost if no radio is selected
  }
}

/* Transport fee
--------------------------------------------------------------------------------------------------------------------------------------*/

function transportFee(timeOfDay) {
  switch (timeOfDay) {
    case 'm':
      return "Transport fee: " + morning;
    case 'd':
      return "Transport fee: " + afternoon;
    case 'n':
      return "Transport fee: " + night;
    default:
      return ""; // Return empty string if invalid timeOfDay is provided
  }
}

/* Event listener for calculateCost button
--------------------------------------------------------------------------------------------------------------------------------------*/

costButton.addEventListener('click', setTransportFee);

/* Ensure only one radio button can be selected at a time
--------------------------------------------------------------------------------------------------------------------------------------*/

radios.forEach(radio => radio.addEventListener('change', () => {
  radios.forEach(otherRadio => otherRadio !== radio && (otherRadio.checked = false)); // Deselect other radio buttons except the clicked one
}));
