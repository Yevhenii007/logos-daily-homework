let firstElem = (x) => document.querySelector(x);

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
	firstElem(
		".buying__ordered"
	).innerHTML += `<div>Пиво: ${count} шт.</div>`;
	beerCount -= count;
	overallPrice += beerPrice * count;
	balance += overallPrice;
}
function buyingOrderedVine(count) {
	firstElem(
		".buying__ordered"
	).innerHTML += `<div>Вино: ${count} шт.</div>`;
	vineCount -= count;
	overallPrice += vinePrice * count;
	balance += overallPrice;
}
function buyingOrderedPepsi(count) {
	firstElem(
		".buying__ordered"
	).innerHTML += `<div>Пепсі: ${count} шт.</div>`;
	pepsiCount -= count;
	overallPrice += pepsiPrice * count;
	balance += overallPrice;
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
