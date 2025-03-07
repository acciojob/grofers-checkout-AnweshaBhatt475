// Function to calculate the total price and update the table
function calculateTotalPrice() {
   
    const priceElements = document.querySelectorAll('.price');
    
  
    let totalPrice = 0;

    
    priceElements.forEach(priceElement => {
        
        totalPrice += parseFloat(priceElement.textContent) || 0;
    });

    
    const totalRow = document.createElement('tr');

    
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2'); 
    totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

    
    totalRow.appendChild(totalCell);

   
    const table = document.querySelector('table'); 
    table.appendChild(totalRow);
}


calculateTotalPrice();
