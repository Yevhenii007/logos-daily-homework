import * as module from "./task-2-module.js";

let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);

firstElem(".available__balance").innerHTML = `${module.checkBalance()} грн.`
firstElem(".available__beer").innerHTML = `${module.checkBeer()} шт.`
firstElem(".available__vine").innerHTML = `${module.checkVine()} шт.`
firstElem(".available__pepsi").innerHTML = `${module.checkPepsi()} шт.`

let add = arrayElem("input[type='button']")[0];
let buy = arrayElem("input[type='button']")[1];

add.addEventListener("click", function () {
	let amount = firstElem(".buying__number");

	module.orderProduct(amount.value);

	firstElem(".buying__number").value = "";
});

buy.addEventListener("click", function () {
	firstElem(".information").innerHTML = firstElem(".buying__ordered").innerHTML;

	firstElem(".available__balance").innerHTML = module.checkBalance();
	firstElem(".available__beer").innerHTML = module.checkBeer();
	firstElem(".available__vine").innerHTML = module.checkVine();
	firstElem(".available__pepsi").innerHTML = module.checkPepsi();

	if (firstElem(".buying__ordered").innerHTML == "") {
		firstElem(".information").innerHTML = "";
	} else {
		firstElem(".information").innerHTML += `Всього: ${module.checkOverallPrice()} гривень`;
	}

	firstElem(".buying__ordered").innerHTML = "";

});
