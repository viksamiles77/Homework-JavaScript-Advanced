let carTable = document.querySelector("#car-table");
const jsonURL =
  "https://raw.githubusercontent.com/viksamiles77/Viktor_JSON/main/cars.json";

fetch(jsonURL)
  .then((res) => {
    return res.json();
  })
  .then((allCarsArray) => {
    fillTheTable(allCarsArray);
  })
  .catch((error) => {
    console.log("ERROR", error);
  })
  .finally(() => {
    console.log("Fetch is done");
  });

function createTableCell(content) {
  const cell = document.createElement("td");
  cell.textContent = content;
  return cell;
}

function fillTheTable(allCarsArray) {
  allCarsArray.forEach((car) => {
    const row = document.createElement("tr");

    row.appendChild(createTableCell(car.brand));
    row.appendChild(createTableCell(car.model));
    row.appendChild(createTableCell(car.doors));
    row.appendChild(createTableCell(car.gasType));
    row.appendChild(createTableCell(car.color));
    row.appendChild(createTableCell(car.isNew ? "New" : "Used"));
    row.appendChild(createTableCell(car.horsepower));

    carTable.appendChild(row);
  });
}
