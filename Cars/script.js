let carTable = document.querySelector("#car-table");
const jsonURL =
  "https://raw.githubusercontent.com/viksamiles77/Viktor_JSON/main/cars.json";

fetch(jsonURL)
  .then((res) => {
    return res.json();
  })
  .then((allCarsArray) => {
    // fillTheTable(allCarsArray);
  })
  .catch((error) => {
    console.log("ERROR", error);
  })
  .finally(() => {
    console.log("Fetch is done");
  });

function fillTheTable(allCarsArray) {
  allCarsArray.forEach((car) => {
    const row = document.createElement("tr");

    const brandCell = document.createElement("td");
    brandCell.textContent = car.brand;
    row.appendChild(brandCell);

    const modelCell = document.createElement("td");
    modelCell.textContent = car.model;
    row.appendChild(modelCell);

    const doorsCell = document.createElement("td");
    doorsCell.textContent = car.doors;
    row.appendChild(doorsCell);

    const gasTypeCell = document.createElement("td");
    gasTypeCell.textContent = car.gasType;
    row.appendChild(gasTypeCell);

    const colorCell = document.createElement("td");
    colorCell.textContent = car.color;
    row.appendChild(colorCell);

    const conditionCell = document.createElement("td");
    conditionCell.textContent = car.isNew ? "New" : "Used";
    row.appendChild(conditionCell);

    const horsepowerCell = document.createElement("td");
    horsepowerCell.textContent = car.horsepower;
    row.appendChild(horsepowerCell);

    carTable.appendChild(row);
  });
}
