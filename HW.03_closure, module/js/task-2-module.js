let balance = 1000;
let beerCount = 100;
let vineCount = 50;
let pepsiCount = 80;

let beerPrice = 40;
let vinePrice = 120;
let pepsiPrice = 20;
let overallPrice = 0;

function zeroOverallPrice() {
  return overallPrice = 0;
}

function buyingOrderedBeer(count) {
  beerCount -= count;
  overallPrice += beerPrice * count;
  balance += beerPrice * count;
}
function buyingOrderedVine(count) {
  vineCount -= count;
  overallPrice += vinePrice * count;
  balance += vinePrice * count;
}
function buyingOrderedPepsi(count) {
  pepsiCount -= count;
  overallPrice += pepsiPrice * count;
  balance += pepsiPrice * count;
}

function checkBalance() {
  return balance;
}
function checkOverallPrice() {
  return overallPrice;
}
function checkBeer() {
  return beerCount;
}
function checkVine() {
  return vineCount;
}
function checkPepsi() {
  return pepsiCount;
}

export {
  checkBalance,
  checkOverallPrice,
  checkBeer,
  checkVine,
  checkPepsi,
  buyingOrderedBeer,
  buyingOrderedVine,
  buyingOrderedPepsi,
  zeroOverallPrice,
};
