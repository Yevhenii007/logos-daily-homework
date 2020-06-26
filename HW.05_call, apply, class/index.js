// // Завдання №1
// class Worker {
// 	constructor(firstname, surname, rate, days) {
// 		this.name = firstname;
// 		this.surname = surname;
// 		this.rate = rate;
// 		this.days = days;
// 	}
// 	getSalary() {
// 		return this.rate * this.days;
// 	}
// }

// const worker = new Worker("Ivan", "Ivanov", 500, 21);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 500
// console.log(worker.days); //виведе 21
// console.log(worker.getSalary()); //виведе 10500 - тобто 500*21

// // Завдання №2
// class MyString {
// 	constructor() {

// 	}
// 	reverse(element) {
// 		return element.split("").reverse().join("")
// 	}
// 	ucFirst(element) {
// 		return element.charAt(0).toUpperCase() + element.slice(1);
// 	}
// 	ucWords(element) {
// 		let splitStr = element.toLowerCase().split(' ');
// 		for (let i = 0; i < splitStr.length; i++) {
// 			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
// 		}
// 		return splitStr.join(" ");
// 	}
// }

// const str = new MyString();

// console.log(str.reverse("IVAN")); //виведе 'NAVI'
// console.log(str.ucFirst("arsenal")); //виведе 'Arsenal'
// console.log(str.ucWords("arsenal arsenal arsenal")); //виведе 'Arsenal Arsenal Arsenal'
