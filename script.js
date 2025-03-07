function calculateTotalPrice() {
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent) || 0;
    });

    const table = document.querySelector('table');
    const existingTotalRow = document.querySelector('.total-price-row');
    if (existingTotalRow) existingTotalRow.remove(); // Remove old total row if exists

    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-price-row'); // Add class for identification

    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}

document.querySelector('button').addEventListener('click', calculateTotalPrice);
