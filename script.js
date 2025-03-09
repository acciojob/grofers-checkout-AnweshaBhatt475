function calculateTotalPrice() {
  // Step 1: Get all elements with the class "price"
  let priceElements = document.querySelectorAll('.price');
  let totalPrice = 0;

  // Step 2: Loop through each price element and calculate the sum
  priceElements.forEach(priceElement => {
      totalPrice += parseInt(priceElement.textContent); // Convert the text to a number and add it
  });

  // Step 3: Select the table and check if a "Total Price" row already exists
  let table = document.querySelector('table');
  let oldTotalRow = document.querySelector('.total-price-row');
  if (oldTotalRow){
     oldTotalRow.remove();
   } // Remove the old total row if it exists

  // Step 4: Create a new row and cell for the total price
  let totalRow = document.createElement('tr'); // Create a new table row
  totalRow.classList.add('total-price-row'); // Add a class to identify the row

  const totalCell= document.createElement('td'); // Create a new cell
  totalCell.setAttribute('colspan', '2'); // Make the cell span two columns
  totalCell.textContent = `Total Price: ${totalPrice}`; // Set the text to show the total price

  // Step 5: Add the cell to the row, and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
}

// Add an event listener to the button to calculate the total when clicked
document.querySelector('button').addEventListener('click', calculateTotalPrice);



