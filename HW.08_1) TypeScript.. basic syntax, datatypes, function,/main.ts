// // Завдання №1

// let city: string;
// city = "Київ";
// city = "Львів";
// let address: string = city;
// console.log(address);

/////////////////////////////////////////////////////////////////////////////////////////
// // Завдання №2

// let question: string = prompt("Введіть число", "2");
// let num: number = +question;
// if (num == 0) {
// 	console.log("Число 0.");
// } else if (num % 2 == 0) {
// 	console.log("Число парне.");
// } else {
// 	console.log("Число непарне.");
// }

/////////////////////////////////////////////////////////////////////////////////////////
// // Завдання №3

// function getMaxOfArray1(...numbers: number[]) {
// 	return numbers.sort((a, b) => b - a)[0];
// }
// console.log(getMaxOfArray1(5, 25, 8, 10, 1));

// function getMaxOfArray2(...numbers: number[]) {
// 	return Math.max.apply(null, numbers);
// }
// console.log(getMaxOfArray2(5, 25, 8, 10, 1));

// function getMaxOfArray3(...numbers: number[]) {
// 	let max = -Infinity;
// 	let min = +Infinity;

// 	for (var i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > max) {
// 			max = numbers[i];
// 		}
// 		if (numbers[i] < min) {
// 			min = numbers[i];
// 		}
// 	}
// 	console.log(max);

// }
// getMaxOfArray3(5, 25, 8, 10, 1);

/////////////////////////////////////////////////////////////////////////////////////////
// // Завдання №4

// function getSqrt(value: any) {
// 	if (isNaN(value)) {
// 		console.log("Повинно бути числове значення.");
// 	}
// 	else if (value < 0) {
// 		console.log("Введіть додатнє число.");
// 	}
// 	else if (!value) {
// 		console.log("Будь ласка, введіть число!");
// 	}
// 	else {
// 		let res: number = Math.sqrt(value);
// 		console.log(`Квадратний корінь з ${value} то дорівнює ${res}.`);
// 	}
// }

// getSqrt(2);

/////////////////////////////////////////////////////////////////////////////////////////
// Завдання №5

let firstElem = (x: string) => document.querySelector(x);
let arrayElem = (x: string) => document.querySelectorAll(x);

let add = arrayElem("button")[0];
let reset = arrayElem("button")[1];
let cenzor = arrayElem("button")[2];

let arrOfWords: Array<string> = [];

let badWordsSpanElem: any = arrayElem("span")[1];
let inputElem: any = firstElem("input");
let textareaElem: any = firstElem("textarea");

add.addEventListener("click", function (): void {
	if (!inputElem.value) {
		inputElem.classList.add("error");
		inputElem.placeholder = "Please write a word!";
	} else {
		inputElem.classList.remove("error");
		inputElem.placeholder = "word here..";

		arrOfWords.push(inputElem.value);
		badWordsSpanElem.innerHTML = arrOfWords;
		inputElem.value = "";
	}
});

reset.addEventListener("click", function (): void {
	inputElem.classList.remove("error");
	inputElem.placeholder = "word here..";

	textareaElem.classList.remove("error");
	textareaElem.placeholder = "text here..";

	arrOfWords = [];

	badWordsSpanElem.innerHTML = "";

	inputElem.value = "";
	textareaElem.value = "";
	textareaElem.classList.remove("error");
	textareaElem.classList.remove("success");

});

cenzor.addEventListener("click", function (): void {
	let text: string = textareaElem.value;

	if (!textareaElem.value) {
		textareaElem.classList.add("error");
		textareaElem.placeholder = "Please write a text!";
	} else {
		textareaElem.classList.remove("error");
		textareaElem.classList.add("success");
		textareaElem.placeholder = "text here..";

		for (let findWors of arrOfWords) {
			let star: string = "";

			let reg = new RegExp(findWors, "gi");

			text = text.replace(reg, function (): string {
				for (let i: number = 0; i < findWors.length; i++) {
					star += "*";
				}
				return star;
			});
		}
		textareaElem.value = text;
	}
});
