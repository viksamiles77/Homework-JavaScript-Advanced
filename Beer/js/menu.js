// selecting elements
const searchBeer = document.querySelector("#beer-search");
const selectPagination = document.querySelector("#select-pagination");
const resultContainer = document.querySelector("#result");
const checkbox = document.querySelector("#checkbox");
const backToGenBtn = document.querySelector("#back-to-generator-btn");
const nextPageBtn = document.querySelector("#next-button");
const previousPageBtn = document.querySelector("#previous-button");
let currentPage = 1;
let perPage = 25;

// functions
async function getBeers() {
  try {
    const searchValue = searchBeer.value.trim();
    const paginationValue = selectPagination.value;
    let apiUrl = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`;

    if (searchValue) {
      apiUrl += `&beer_name=${searchValue}`;
    }

    if (checkbox.checked) {
      apiUrl += `&abv_gt=6`;
      console.log("its checked");
    }

    const response = await fetch(apiUrl);
    const beers = await response.json();
    return beers;
  } catch (error) {
    console.log(error);
  }
}

function createTable(beers) {
  let table = `
        <table class="beer-table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Food Pairing</th>
            <th>ABV</th>
            <th>EBC</th>
            <th>IBU</th>
          </tr>
      `;

  beers.forEach((beer) => {
    table += `
          <tr>
            <td>${beer.id}</td>
            <td>${beer.name}</td>
            <td>${beer.food_pairing}</td>
            <td>${beer.abv}</td>
            <td>${beer.ebc}</td>
            <td>${beer.ibu}</td>
          </tr>
        `;
  });
  table += `</table>`;

  return table;
}

async function showBeers() {
  const beers = await getBeers();
  const table = createTable(beers);
  resultContainer.innerHTML = table;
}

// event listeners
searchBeer.addEventListener("input", () => {
  currentPage = 1;
  showBeers();
});

backToGenBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

nextPageBtn.addEventListener("click", () => {
  currentPage++;
  showBeers();
});

previousPageBtn.addEventListener("click", () => {
  currentPage--;
  showBeers();
});

// init
showBeers();
