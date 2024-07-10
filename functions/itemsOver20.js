let items = [
  {name: 'Apple', qty: 6},
  {name: 'Banana', qty: 12},
  {name: 'Pear', qty: 6},
  {name: 'Orange', qty: 20},
  {name: 'Strawberry', qty: 45},
  {name: 'Grapes', qty: 30}
];

const itemName = document.querySelector('.itemName');
const itemQty = document.querySelector('.qtyNo');
const itemsOver20List = document.querySelector('.itemsOver20');
const itemsUnder20List = document.querySelector('.items20Under');
const addItems = document.querySelector('.addItem');

// Function to render the lists of items
function updateItems() {
  itemsOver20List.innerHTML = '';
  itemsUnder20List.innerHTML = ''; 
  
  items.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.name}: ${item.qty}`;
      
      if (item.qty > 20) {
          itemsOver20List.appendChild(li);
      } else {
          itemsUnder20List.appendChild(li);
      }
  });
}

// Initial render
updateItems();

// Add new item on button click
addItems.addEventListener('click', function() {
  const name = itemName.value.trim();
  const qty = parseInt(itemQty.value);
  if (name && !isNaN(qty)) {
      items.push({name, qty});
      updateItems(); // Re-render the lists
      itemName.value = ''; // Clear input fields
      itemQty.value = '';
  } else {
      alert('Please enter valid item name and quantity.');
  }
});