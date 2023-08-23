const table = document.createElement("table");

let rows = 10;
let cols = 10;
let value = 1;

for ( let i = 0; i < rows; i++){
    const row = document.createElement("tr");
    for ( let k = 0; k < cols; k++){
        const cell = document.createElement("td");
        cell.textContent = value.toString();
        row.appendChild(cell);
        value++;
    }
    table.appendChild(row);
}
document.body.appendChild(table);