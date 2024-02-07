// selecting elements

let currentPage = 1;
const searchBeer = document.querySelector("#beer-search");
const selectPagination = document.querySelector("#select-pagination");
const backToGenBtn = document.querySelector("#back-to-generator-btn");
const resultDiv = document.querySelector("#result");

// functions

async function getBeers() {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=2&per_page=80`
    );
    const beers = await response.json();
    return beers;
  } catch (error) {
    console.log(error);
  }
}
