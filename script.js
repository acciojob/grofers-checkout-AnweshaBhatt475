
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll('.price');
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');

    newCell.setAttribute('colspan', 2);
    newCell.textContent = `Total Price: Rs ${total}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);