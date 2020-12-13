function CoffeeMake() {}
CoffeeMake.prototype.on = function () {
	console.log("Turn on");
}
CoffeeMake.prototype.off = function () {
	console.log("Turn off");
}


function DripCoffeeMaker() {}
DripCoffeeMaker.prototype = CoffeeMake.prototype;
DripCoffeeMaker.prototype.standHeating = function () {
	console.log(`You have chosen to heat the stand`);
}
DripCoffeeMaker.prototype.startDelay = function () {
	console.log(`You have selected a start delay.`);
}


function CarobCoffeeMaker() {}
CarobCoffeeMaker.prototype = CoffeeMake.prototype;
CarobCoffeeMaker.prototype.howMuchWatterPerServing = function (number) {
	console.log(`You chose ${number} parts of watter per serving.`);
}
CarobCoffeeMaker.prototype.waterVaporSupply = function () {
	console.log(`Water vapor is supplied.`);
}


function CoffeeMachine() {}
CoffeeMachine.prototype = CarobCoffeeMaker.prototype;
CoffeeMachine.prototype.grainGrinding = function () {
	console.log(`Grain grinding is carried out.`);
}
CoffeeMachine.prototype.drinkSelection = function (type) {
	console.log(`You chose a ${type} drink.`);
}


let cfMake = new CoffeeMake();
let drip = new DripCoffeeMaker();
let carob = new CarobCoffeeMaker("2");
let machine = new CoffeeMachine("cappuccino")


console.log(machine);


cfMake.on();
drip.startDelay();
carob.howMuchWatterPerServing("2");
machine.drinkSelection("cappuccino");
machine.off();
machine.startDelay();
