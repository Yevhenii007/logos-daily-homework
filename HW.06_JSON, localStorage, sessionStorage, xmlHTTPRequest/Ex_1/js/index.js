let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);
let signUp = arrayElem("button")[0];
let signIn = arrayElem("button")[1];
let signOut = arrayElem("button")[2];
let signInNow = arrayElem("a")[0];
let signUpNow = arrayElem("a")[1];


signInNow.addEventListener("click", function () {
  arrayElem(".container")[0].classList.toggle("display");
  arrayElem(".container")[1].classList.toggle("display");
});
signUpNow.addEventListener("click", function () {
  arrayElem(".container")[0].classList.toggle("display");
  arrayElem(".container")[1].classList.toggle("display");
});


let user = {};


signUp.addEventListener("click", function () {
  let inputFirstName = arrayElem("input")[0];
  let inputLastName = arrayElem("input")[1];
  let inputEmail = arrayElem("input")[2];
  let inputPassword = arrayElem("input")[3];
  let form1 = arrayElem("form")[0];

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
      inputEmail.value = "";
      let div = document.createElement('div');
      div.className = "invalid-tooltip";
      div.innerHTML = "This email already exist"
      inputEmail.after(div)
    }
  }

  let randomNumber = Math.random();

  if (
    inputEmail.checkValidity() &&
    inputFirstName.value &&
    inputLastName.value &&
    inputEmail.value &&
    inputPassword.value
  ) {
    localStorage.setItem(`${randomNumber}`, JSON.stringify(user));
    location.reload();
    form1.reset();
  } else {
    inputEmail.value = "";
  }
});


signIn.addEventListener("click", function () {
  let inputEmail = firstElem("#emailaddress2");
  let inputPassword = firstElem("#password2");
  let error = firstElem("small");
  let profileBlock = firstElem(".profile-block");
  let nameInfo = firstElem(".name-info");
  let emailInfo = firstElem(".email-info");

  if (!inputEmail.value || !inputPassword.value) {
    error.innerHTML = "Incorrect email or password";
    error.classList.remove("invisible");
    error.classList.add("visible");
  }

  if (localStorage.length > 0) {
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      let {
        userEmail: resEmail,
        userPassword: resPassword,
        userFirstName,
        userLastName
      } = JSON.parse(localStorage.getItem(key));

      if (
        inputEmail.value.trim() == resEmail &&
        inputPassword.value.trim() == resPassword
      ) {
        nameInfo.innerHTML = `${userFirstName} ${userLastName}`;
        emailInfo.innerHTML = `${resEmail}`;

        inputEmail.value = "";
        inputPassword.value = "";

        error.innerHTML = "";
        error.classList.add("invisible");
        error.classList.remove("visible");

        profileBlock.classList.toggle("display");
        arrayElem(".container")[1].classList.toggle("display");
        break;
      } else if (inputEmail.value.trim() !== resEmail) {
        error.innerHTML = "There is no user with such email";
        error.classList.remove("invisible");
        error.classList.add("visible");
      } else if (inputPassword.value.trim() !== resPassword) {
        error.innerHTML = "There is no user with such password";
        error.classList.remove("invisible");
        error.classList.add("visible");
      } else {
        error.innerHTML = "There is no user with such data";
        error.classList.remove("invisible");
        error.classList.add("visible");
      }
    }
  } else {
    error.innerHTML = "Localstorage is empty";
    error.classList.remove("invisible");
    error.classList.add("visible");
  }
});


signOut.addEventListener("click", function () {
  let profileBlock = firstElem(".profile-block");
  profileBlock.classList.toggle("display");
  arrayElem(".container")[1].classList.toggle("display");
});


(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
