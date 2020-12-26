
let addUserBtn = document.querySelector("input[value='Add user']") as HTMLInputElement;
let saveEditedUserBtn = document.querySelector("input[value='Save edited user']") as HTMLInputElement;

let hidenInputId = document.querySelector("#hiden-input-id") as HTMLInputElement;
let loginInputValue = document.querySelectorAll("input[class='form-control'")[0] as HTMLInputElement;
let passwordInputValue = document.querySelectorAll("input[class='form-control'")[1] as HTMLInputElement;
let emailInputValue = document.querySelectorAll("input[class='form-control'")[2] as HTMLInputElement;

let tbody = document.querySelector("tbody") as unknown as HTMLTableElement;
let arrayOfTbodyTh = document.getElementsByClassName("sequence-number");
let lastAssignedIndex: number = 0;
let editableTrId: number;
let numberOfPreviousThInArrayOfTbodyTh: number;
let existingEmailValue: boolean = false;

let trElement: any;
let loginTdElement: any;
let passwordTdElement: any;
let emailTdElement: any;
let editUserBtn: any;
let deleteUserBtn: any;

addUserBtn.addEventListener("click", function (): void {
  existingEmailFunction();
  if (existingEmailValue === false) {
    let trId = addUserFunction(loginInputValue.value, passwordInputValue.value, emailInputValue.value);
    addListerersToEditDeleteBtns(trId);
  }
})
saveEditedUserBtn.addEventListener("click", function (): void {
  existingEmailFunction();
  if (existingEmailValue === false) {
    saveEditedUserFunction(editableTrId);
  }
})
function addListerersToEditDeleteBtns(trId: number): void {
  searchingElementsInTbody(trId);
  editUserBtn.addEventListener("click", function (e) {
    editUserFunction(e.target.closest("tr").id);
  });
  deleteUserBtn.addEventListener("click", function (e) {
    deleteUserFunction(e.target.closest("tr").id);
  });
}

function addUserFunction(log: string, pass: string, em: string): number {
  if (loginInputValue.value && passwordInputValue.value && emailInputValue.value) {
    let obj = { id: lastAssignedIndex, login: log, password: pass, email: em };
    lastAssignedIndex++;
    let tagTr = document.createElement('tr');
    tagTr.id = `${obj.id}`;
    tagTr.innerHTML = `
      <th class="sequence-number"></th>
      <td class="login">${obj.login}</td>
      <td class="password">${obj.password}</td>
      <td class="email">${obj.email}</td>
      <td>
        <input type="button" class="btn btn-warning" value="Edit"/>
      </td>
      <td>
        <input type="button" class="btn btn-danger" value="Delete"/>
      </td>
      <td class="swich-btns"></td>`;

    tbody.append(tagTr);

    let arrayTdSwichBtns = document.querySelectorAll(".swich-btns");

    if (arrayTdSwichBtns.length === 2) {
      let tagFirstButtonDown = document.createElement('button');
      tagFirstButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
      tagFirstButtonDown.style.padding = "10px 25px";
      arrayTdSwichBtns[0].append(tagFirstButtonDown);
      let tagLastButtonUp = document.createElement('button');
      tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
      tagLastButtonUp.style.padding = "10px 25px";
      arrayTdSwichBtns[arrayTdSwichBtns.length - 1].append(tagLastButtonUp);
    }

    if (arrayTdSwichBtns.length > 2) {
      let tagTdBtns = document.createElement('td');
      tagTdBtns.classList.add("swich-btns")
      let tagButtonUp = document.createElement('button');
      let tagButtonDown = document.createElement('button');
      tagButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
      tagButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
      tagTdBtns.append(tagButtonUp);
      tagTdBtns.append(tagButtonDown);
      arrayTdSwichBtns[arrayTdSwichBtns.length - 2].replaceWith(tagTdBtns);

      let tagLastButtonUp = document.createElement('button');
      tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
      tagLastButtonUp.style.padding = "10px 25px";
      arrayTdSwichBtns[arrayTdSwichBtns.length - 1].append(tagLastButtonUp);
    }

    // for (let i = 0; i < arrayTdSwichBtns.length; i++) {
    //   if (i === 0 && arrayTdSwichBtns[i].firstElementChild === null) {
    //     let tagFirstButtonDown = document.createElement('button');
    //     tagFirstButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
    //     tagFirstButtonDown.style.padding = "10px 25px";
    //     arrayTdSwichBtns[i].append(tagFirstButtonDown);
    //   } else if (i > 0 && i < arrayTdSwichBtns.length - 1) {
    //     arrayTdSwichBtns[i].innerHTML = '';
    //     let tagButtonUp = document.createElement('button');
    //     let tagButtonDown = document.createElement('button');
    //     tagButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
    //     tagButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
    //     arrayTdSwichBtns[i].append(tagButtonUp);
    //     arrayTdSwichBtns[i].append(tagButtonDown);
    //   } else if (i == arrayTdSwichBtns.length - 1) {
    //     let tagLastButtonUp = document.createElement('button');
    //     tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
    //     tagLastButtonUp.style.padding = "10px 25px";
    //     arrayTdSwichBtns[arrayTdSwichBtns.length - 1].append(tagLastButtonUp);
    //   }
    // }

    // let tagTd = document.createElement('td');
    // tagTr.append(tagTd);

    // let arrayTrElements = document.querySelectorAll(`tr`);
    // if (arrayTrElements.length >= 3) {
    //   tbody.firstElementChild.lastElementChild.append(tagFirstButtonDown);
    //   tbody.lastElementChild.lastElementChild.append(tagLastButtonUp);
    // }

    // tagButtonUp.parentElement.removeChild(tagButtonUp);
    // tagButtonDown.style.padding = "10px 25px";

    // tagButtonDown.parentElement.removeChild(tagButtonDown);
    // tagButtonUp.style.padding = "10px 25px";



    // tagTr.append("<button><i class='fas fa-angle-up'></i></button><button><i class='fas fa-angle-down'></i></button>");

    searchingElementsInTbody(obj.id);
    numberOfPreviousTh();
    numberingOfTrElements(numberOfPreviousThInArrayOfTbodyTh);
    deleteInputsValue();
    return obj.id;
  }
  else {
    alert('Please enter more data.');
  }
}
function saveEditedUserFunction(editableTrId: number): void {
  searchingElementsInTbody(editableTrId);
  loginTdElement.textContent = `${loginInputValue.value}`;
  passwordTdElement.textContent = `${passwordInputValue.value}`;
  emailTdElement.textContent = `${emailInputValue.value}`;
  deleteInputsValue();
  changeBtnToAddUserBtn();
}
function editUserFunction(trId: string): void {
  editableTrId = Number(trId);
  searchingElementsInTbody(editableTrId);
  hidenInputId.value = trElement.id;
  loginInputValue.value = loginTdElement.textContent;
  passwordInputValue.value = passwordTdElement.textContent;
  emailInputValue.value = emailTdElement.textContent;
  changeBtnToSaveEditedUserBtn();
}
function deleteUserFunction(trId: string): void {
  searchingElementsInTbody(Number(trId));
  numberOfPreviousTh();
  console.log(trElement.id);

  trElement.parentElement.removeChild(trElement);
  numberingOfTrElements(numberOfPreviousThInArrayOfTbodyTh);
  if (trElement.id === hidenInputId.value) {
    deleteInputsValue();
    changeBtnToAddUserBtn();
  }
}

function searchingElementsInTbody(trId: number) {
  trElement = document.getElementById(`${trId}`);
  loginTdElement = trElement.querySelector(".login");
  passwordTdElement = trElement.querySelector(".password");
  emailTdElement = trElement.querySelector(".email");
  editUserBtn = trElement.querySelector("input[value='Edit']");
  deleteUserBtn = trElement.querySelector("input[value='Delete']");
}
function numberOfPreviousTh() {
  if (trElement.previousElementSibling !== null) {
    numberOfPreviousThInArrayOfTbodyTh = trElement.previousElementSibling.firstElementChild.textContent;
  } else {
    numberOfPreviousThInArrayOfTbodyTh = 1;
  }
}
function numberingOfTrElements(numberOfPreviousThInArrayOfTbodyTh: number) {
  for (let index = numberOfPreviousThInArrayOfTbodyTh - 1; index < arrayOfTbodyTh.length; index++) {
    arrayOfTbodyTh[index].textContent = `${index + 1}`;
  }
}
function deleteInputsValue() {
  loginInputValue.value = '';
  passwordInputValue.value = '';
  emailInputValue.value = '';
}
function changeBtnToAddUserBtn() {
  addUserBtn.classList.remove("d-none");
  saveEditedUserBtn.classList.add("d-none");
}
function changeBtnToSaveEditedUserBtn() {
  addUserBtn.classList.add("d-none");
  saveEditedUserBtn.classList.remove("d-none");
}
function existingEmailFunction() {
  let emailArray = document.querySelectorAll(".email");
  if (emailArray.length !== 0) {
    for (const emailTdElementInArray of emailArray) {
      if (emailTdElementInArray.textContent === emailInputValue.value) {
        alert("User with such email already exist");
        existingEmailValue = true;
        break;
      } else {
        existingEmailValue = false;
      }
    }
  }
}
























// function render(): void {
//   tbody.innerHTML += `
//     <tr>
//       <th scope="row">${userIndex + 1}</th>
//       <td>${arrayUsers[userIndex].login}</td>
//       <td>${arrayUsers[userIndex].password}</td>
//       <td>${arrayUsers[userIndex].email}</td>
//       <td>
//         <input name="${userIndex}" type="button" class="btn btn-warning" value="Edit"/>
//       </td>
//       <td>
//         <input name="${userIndex}" type="button" class="btn btn-danger" value="Delete"/>
//       </td>
//     </tr>`;
// }

////// ////////////////////////////////////////////////////////////////

// tbody.addEventListener("click", function (e: MouseEvent): void {
//   deleteUser(e);
//   editUser(e);
// })

// function deleteUser(e: MouseEvent): void {
//   if (e.target.matches("input[value='Delete']")) {
//     let nodes = [].slice.call(document.querySelectorAll("input[value='Delete']"))
//     let res = nodes.indexOf(e.target)
//     arrayUsers.splice(res, 1);
//     render();
//   }
// }

// function editUser(e: MouseEvent): void {
//   if (e.target.matches("input[value='Edit']")) {
//     let nodes = [].slice.call(document.querySelectorAll("input[value='Edit']"))
//     let res = nodes.indexOf(e.target)
//     loginInputValue.value = arrayUsers[res].login;
//     passwordInputValue.value = arrayUsers[res].password;
//     emailInputValue.value = arrayUsers[res].email;
//     userIndex = res;
//     addUserBtn.classList.add("d-none")
//     saveEditedUserBtn.classList.remove("d-none")
//   }
// }

////// ////////////////////////////////////////////////////////////////
