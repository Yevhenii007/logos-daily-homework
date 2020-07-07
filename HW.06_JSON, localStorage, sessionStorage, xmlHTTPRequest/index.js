let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);

let signUpBlue = arrayElem("button")[0];
let signIn = arrayElem("button")[1];
let signUpGreen = arrayElem("button")[2];
let signInNow = arrayElem("a")[0];
let signUpNow = arrayElem("a")[1];

let user = {};

signUpBlue.addEventListener("click", function () {
	let inputFirstName = arrayElem("input")[0];
	let inputLastName = arrayElem("input")[1];
	let inputEmail = arrayElem("input")[2];
	let inputPassword = arrayElem("input")[3];

	user.userFirstName = inputFirstName.value.trim();
	user.userLastName = inputLastName.value.trim();
	user.userEmail = inputEmail.value.trim();
	user.userPassword = inputPassword.value.trim();

	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key)) {
			continue;
		}
		let resEmail = JSON.parse(localStorage.getItem(key)).userEmail;

		if (inputEmail.value.trim() == resEmail) {
			return alert("This email already exist");
		}
	}

	if (
		inputEmail.value.trim().includes("@") &&
		inputFirstName.value &&
		inputLastName.value &&
		inputEmail.value &&
		inputPassword.value
	) {
		localStorage.setItem(`User-${inputEmail.value.trim()}`, JSON.stringify(user));
		inputFirstName.value = "";
		inputLastName.value = "";
		inputEmail.value = "";
		inputPassword.value = "";
	}
});

signInNow.addEventListener("click", function () {
	arrayElem(".container")[0].classList.toggle("display");
	arrayElem(".container")[1].classList.toggle("display");
});
signUpNow.addEventListener("click", function () {
	arrayElem(".container")[0].classList.toggle("display");
	arrayElem(".container")[1].classList.toggle("display");
});

signIn.addEventListener("click", function () {});










(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();
