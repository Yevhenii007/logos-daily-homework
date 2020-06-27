// // Завдання №1

// let city: string;
// city = "Київ";
// city = "Львів";
// let address: string = city;
// console.log(address);

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

// // Завдання №5

