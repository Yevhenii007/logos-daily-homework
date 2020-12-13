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

// const worker1 = new Worker("Ivan", "Ivanov", 500, 21);
// const worker2 = new Worker("Petro", "Petrov", 700, 19);
// console.log(worker1.name); // виведе 'Ivan'
// console.log(worker1.surname); //виведе 'Ivanov'
// console.log(worker1.rate); //виведе 500
// console.log(worker1.days); //виведе 21
// console.log(worker1.getSalary()); //виведе 10500 - тобто 500*21
// console.log(worker2.getSalary()); //виведе 13300 - тобто 700*19
// let res = worker1.getSalary() + worker2.getSalary();
// console.log(res); //виведе 23800 - тобто 10500+13300

// Завдання №2
class MyString {
	constructor() {

	}
	reverse(element) {
		return element.split("").reverse().join("")
	}
	ucFirst(element) {
		return element.charAt(0).toUpperCase() + element.slice(1);
		return element[0].toUpperCase() + element.substring(1);
		return element[0].toUpperCase() + element.substr(1);
	}
	ucWords(element) {
		let splitStr = element.toLowerCase().split(' ');
		for (let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(" ");
	}
}

const str = new MyString();

console.log(str.reverse("IVAN")); //виведе 'NAVI'
console.log(str.ucFirst("arsenal")); //виведе 'Arsenal'
console.log(str.ucWords("arsenal arsenal arsenal")); //виведе 'Arsenal Arsenal Arsenal'
