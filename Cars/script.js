// <=== selecting elements ===>
const html = {
  carTable: document.querySelector("#car-table"),
  carTypeInput: document.querySelector("#select-car-type"),
  carBrandInput: document.querySelector("#select-car-brand"),
  carModelInput: document.querySelector("#car-model-input"),
  carDoorInput: document.querySelector("#number-of-car-doors"),
  carGasTypeInput: document.querySelector("#select-gas-type"),
  carColorInput: document.querySelector("#select-color"),
  resetFilterBtn: document.querySelector("#reset-filter-btn"),
  applyFilterBtn: document.querySelector("#apply-filter-btn"),
};

const jsonURL =
  "https://raw.githubusercontent.com/viksamiles77/Viktor_JSON/main/cars.json";

// <=== Functions ===>
function getCars() {
  return fetch(jsonURL)
    .then((res) => res.json())
    .catch((error) => {
      console.log("ERROR", error);
    })
    .finally(() => {
      console.log("Fetch is done");
    });
}

function showTable(cars) {
  cars.forEach((car) => {
    html.carTable.innerHTML += createTable(car);
  });
}

function createTable(car) {
  return `

  <tr>
  <td>${car.type}</td>
  <td>${car.brand}</td>
  <td>${car.model}</td>
  <td>${car.doors}</td>
  <td>${car.gasType}</td>
  <td>${car.color}</td>
  <td>${car.isNew ? "New" : "Used"}</td>
  <td>${car.horsepower}</td>
  </tr>`;
}

// <=== Events ===>
html.applyFilterBtn.addEventListener("click", () => {
  while (html.carTable.rows.length > 1) {
    html.carTable.deleteRow(1);
  }
});

//init
getCars().then((cars) => showTable(cars));
