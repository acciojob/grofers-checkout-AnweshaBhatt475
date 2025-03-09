function calculateTotalPrice() {
    // Step 1: Get all elements with the class "price"
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    // Step 2: Loop through each price element and calculate the sum
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent) || 0; // Add each price
    });

    // Step 3: Check if the total price element exists
    let totalPriceElement = document.querySelector('#ans');
    if (!totalPriceElement) {
        // Create a new element with ID "ans" if it doesn't exist
        totalPriceElement = document.createElement('div');
        totalPriceElement.id = 'ans';
        totalPriceElement.style.marginTop = '20px'; // Add some spacing for visibility
        document.body.appendChild(totalPriceElement); // Append it to the body
    }

    // Step 4: Update the text content of the "ans" element
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

// Add an event listener to the button to calculate the total when clicked
document.querySelector('button').addEventListener('click', calculateTotalPrice);
