let firstElem = (x) => document.querySelector(x);

let balance = 1000;
let beerCount = 100;
let vineCount = 50;
let pepsiCount = 80;

let beerPrice = 40;
let vinePrice = 120;
let pepsiPrice = 20;
let overallPrice = 0;

let beerOrder = firstElem("input[value='Beer']");
let vineOrder = firstElem("input[value='Vine']");
let pepsiOrder = firstElem("input[value='Pepsi']");


function orderProduct(count) {
	overallPrice = 0;
	if (count < 0) {
		alert("You can`t enter a negative value");
	} else if (beerOrder.checked) {
		if (beerCount < count) {
			alert(`Sorry, but there are ${beerCount} beer bottles left in the warehouse`);
		} else {
			firstElem(
				".buying__ordered"
			).innerHTML += `<div>Пиво: ${count} шт.</div>`;
			beerCount -= count;
			overallPrice += beerPrice * count;
			balance += overallPrice;
		}
	} else if (vineOrder.checked) {
		if (vineCount < count) {
			alert(`Sorry, but there are ${vineCount} vine bottles left in the warehouse`);
		} else {
			firstElem(
				".buying__ordered"
			).innerHTML += `<div>Вино: ${count} шт.</div>`;
			vineCount -= count;
			overallPrice += vinePrice * count;
			balance += overallPrice;

		}
	} else if (pepsiOrder.checked) {
		if (pepsiCount < count) {
			alert(`Sorry, but there are ${pepsiCount} pepsi bottles left in the warehouse`);
		} else {
			firstElem(
				".buying__ordered"
			).innerHTML += `<div>Пепсі: ${count} шт.</div>`;
			pepsiCount -= count;
			overallPrice += pepsiPrice * count;
			balance += overallPrice;

		}
	}
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
	orderProduct,
};
