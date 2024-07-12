document.getElementById('show-table').addEventListener('click', function() {
    const tableNumber = document.getElementById('table-number').value;
    if (tableNumber >= 1 && tableNumber <= 1000) {
        displayTable(tableNumber);
    } else {
        alert('Please enter a number.');
    }
});

function generateTable(number) {
    let tableHtml = `<table><thead><tr><th colspan="2">Table of ${number}</th></tr></thead><tbody>`;
    for (let i = 1; i <= 10; i++) {
        tableHtml += `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
    }
    tableHtml += '</tbody></table>';
    return tableHtml;
}

function displayTable(number) {
    const container = document.getElementById('table-container');
    container.innerHTML = generateTable(number);
}
