// let carTable = document.querySelector("#car-table");
// const jsonURL =
//   "https://raw.githubusercontent.com/viksamiles77/Viktor_JSON/main/cars.json";

// fetch(jsonURL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((allCarsArray) => {
//     // fillTheTable(allCarsArray);
//   })
//   .catch((error) => {
//     console.log("ERROR", error);
//   })
//   .finally(() => {
//     console.log("Fetch is done");
//   });

// function fillTheTable(allCarsArray) {
//   allCarsArray.forEach((car) => {
//     const row = document.createElement("tr");

//     const brandCell = document.createElement("td");
//     brandCell.textContent = car.brand;
//     row.appendChild(brandCell);

//     const modelCell = document.createElement("td");
//     modelCell.textContent = car.model;
//     row.appendChild(modelCell);

//     const doorsCell = document.createElement("td");
//     doorsCell.textContent = car.doors;
//     row.appendChild(doorsCell);

//     const gasTypeCell = document.createElement("td");
//     gasTypeCell.textContent = car.gasType;
//     row.appendChild(gasTypeCell);

//     const colorCell = document.createElement("td");
//     colorCell.textContent = car.color;
//     row.appendChild(colorCell);

//     const conditionCell = document.createElement("td");
//     conditionCell.textContent = car.isNew ? "New" : "Used";
//     row.appendChild(conditionCell);

//     const horsepowerCell = document.createElement("td");
//     horsepowerCell.textContent = car.horsepower;
//     row.appendChild(horsepowerCell);

//     carTable.appendChild(row);
//   });
// }

const carTable = document.querySelector("#car-table");
const selectCarType = document.querySelector("#select-car-type");
const selectCarBrand = document.querySelector("#select-car-brand");
const selectCarModel = document.querySelector("#car-model-input");
const selectCarDoors = document.querySelector("#number-of-car-doors");
const selectGasType = document.querySelector("#select-gas-type");
const selectCarColor = document.querySelector("#select-color");
const resetFilterBtn = document.querySelector("#reset-filter-btn");
const applyFilterBtn = document.querySelector("#apply-filter-btn");

const jsonURL =
  "https://raw.githubusercontent.com/viksamiles77/Viktor_JSON/main/cars.json";

fetch(jsonURL)
  .then((res) => {
    return res.json();
  })
  .then((allCarsArray) => {
    allCarsArray.forEach((car) => {
      const row = document.createElement("tr");

      fillTheBrandCell(row, car.brand);
      fillTheModelCell(row, car.model);
      fillTheDoorsCell(row, car.doors);
      fillTheGasTypeCell(row, car.gasType);
      fillTheColorCell(row, car.color);
      fillTheConditionCell(row, car.isNew ? "New" : "Used");
      fillTheHorsepowerCell(row, car.horsepower);

      carTable.appendChild(row);
    });
  })
  .catch((error) => {
    console.log("ERROR", error);
  })
  .finally(() => {
    console.log("Fetch is done");
  });

function fillTheBrandCell(row, value) {
  const brandCell = document.createElement("td");
  brandCell.textContent = value;
  row.appendChild(brandCell);
}

function fillTheModelCell(row, value) {
  const modelCell = document.createElement("td");
  modelCell.textContent = value;
  row.appendChild(modelCell);
}

function fillTheDoorsCell(row, value) {
  const doorsCell = document.createElement("td");
  doorsCell.textContent = value;
  row.appendChild(doorsCell);
}

function fillTheGasTypeCell(row, value) {
  const gasTypeCell = document.createElement("td");
  gasTypeCell.textContent = value;
  row.appendChild(gasTypeCell);
}

function fillTheColorCell(row, value) {
  const colorCell = document.createElement("td");
  colorCell.textContent = value;
  row.appendChild(colorCell);
}

function fillTheConditionCell(row, value) {
  const conditionCell = document.createElement("td");
  conditionCell.textContent = value;
  row.appendChild(conditionCell);
}

function fillTheHorsepowerCell(row, value) {
  const horsepowerCell = document.createElement("td");
  horsepowerCell.textContent = value;
  row.appendChild(horsepowerCell);
}
