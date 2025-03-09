function calculateTotalPrice() {
    // Step 1: Get all elements with the class "price"
    let priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    // Step 2: Loop through each price element and calculate the sum
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent) || 0; // Add each price
    });

    
    let totalPriceElement = document.querySelector('#ans');
    if (!totalPriceElement) {
        
        totalPriceElement = document.createElement('div');
        totalPriceElement.id = 'ans';
        document.body.appendChild(totalPriceElement); // Append it to the body
    }

   
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}


document.querySelector('button').addEventListener('click', calculateTotalPrice);
