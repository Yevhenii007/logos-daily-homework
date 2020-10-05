import * as module from "./task-2-module.js";

let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);

firstElem(".available__balance").innerHTML = `${module.checkBalance()} грн.`;
firstElem(".available__beer").innerHTML = `${module.checkBeer()} шт.`;
firstElem(".available__vine").innerHTML = `${module.checkVine()} шт.`;
firstElem(".available__pepsi").innerHTML = `${module.checkPepsi()} шт.`;

let add = arrayElem("input[type='button']")[0];
let buy = arrayElem("input[type='button']")[1];

add.addEventListener("click", function () {
  let amount = firstElem(".buying__number");

  let beerOrder = firstElem("input[value='Beer']");
  let vineOrder = firstElem("input[value='Vine']");
  let pepsiOrder = firstElem("input[value='Pepsi']");

  function orderProduct(count) {
    if (count < 0) {
      alert("You can`t enter a negative value");
    }
    else if (beerOrder.checked) {
      if (module.checkBeer() < count) {
        alert(`Sorry, but there are ${module.checkBeer()} beer bottles left in the warehouse`);
      } else if (amount.value != 0) {
        firstElem(".buying__ordered").innerHTML += `<div>Пиво: ${count} шт.</div>`;
        module.buyingOrderedBeer(count);
      }
    }
    else if (vineOrder.checked) {
      if (module.checkVine() < count) {
        alert(`Sorry, but there are ${module.checkVine()} vine bottles left in the warehouse`);
      } else if (amount.value != 0) {
        firstElem(".buying__ordered").innerHTML += `<div>Вино: ${count} шт.</div>`;
        module.buyingOrderedVine(count);
      }
    }
    else if (pepsiOrder.checked) {
      if (module.checkPepsi() < count) {
        alert(`Sorry, but there are ${module.checkPepsi()} pepsi bottles left in the warehouse`);
      } else if (amount.value != 0) {
        firstElem(".buying__ordered").innerHTML += `<div>Пепсі: ${count} шт.</div>`;
        module.buyingOrderedPepsi(count);
      }
    }
  }

  orderProduct(amount.value);

  amount.value = "";
});


buy.addEventListener("click", function () {
  firstElem(".information").innerHTML = firstElem(".buying__ordered").innerHTML;

  firstElem(".available__balance").innerHTML = `${module.checkBalance()} грн.`;
  firstElem(".available__beer").innerHTML = `${module.checkBeer()} шт.`;
  firstElem(".available__vine").innerHTML = `${module.checkVine()} шт.`;
  firstElem(".available__pepsi").innerHTML = `${module.checkPepsi()} шт.`;

  if (firstElem(".buying__ordered").innerHTML == "") {
    firstElem(".information").innerHTML = "";
  } else {
    firstElem(".information").innerHTML += `Всього: ${module.checkOverallPrice()} гривень`;
  }

  module.zeroOverallPrice();

  firstElem(".buying__ordered").innerHTML = "";
});
