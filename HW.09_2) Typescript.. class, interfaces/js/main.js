let addUserBtn = document.querySelector("input[value='Add user']");
let saveEditedUserBtn = document.querySelector("input[value='Save edited user']");
let hidenInputId = document.querySelector("#hiden-input-id");
let loginInputValue = document.querySelectorAll("input[class='form-control'")[0];
let passwordInputValue = document.querySelectorAll("input[class='form-control'")[1];
let emailInputValue = document.querySelectorAll("input[class='form-control'")[2];
let tbody = document.querySelector("tbody");
let arrayOfTbodyTh = document.getElementsByClassName("sequence-number");
let lastAssignedIndex = 0;
let editableTrId;
let numberOfPreviousThInArrayOfTbodyTh;
let existingEmailValue = false;
let trElement;
let loginTdElement;
let passwordTdElement;
let emailTdElement;
let editUserBtn;
let deleteUserBtn;
addUserBtn.addEventListener("click", function () {
    existingEmailFunction();
    if (existingEmailValue === false) {
        let trId = addUserFunction(loginInputValue.value, passwordInputValue.value, emailInputValue.value);
        addListerersToEditDeleteBtns(trId);
    }
});
saveEditedUserBtn.addEventListener("click", function () {
    existingEmailFunction();
    if (existingEmailValue === false) {
        saveEditedUserFunction(editableTrId);
    }
});
function addListerersToEditDeleteBtns(trId) {
    searchingElementsInTbody(trId);
    editUserBtn.addEventListener("click", function (e) {
        editUserFunction(e.target.closest("tr").id);
    });
    deleteUserBtn.addEventListener("click", function (e) {
        deleteUserFunction(e.target.closest("tr").id);
    });
}
function addListererToUpBtns(upBtn) {
    upBtn.addEventListener("click", function (e) {
        upUserFunction(e.target.closest("tr").id);
    });
}
function addListererToDownBtns(downBtn) {
    downBtn.addEventListener("click", function (e) {
        downUserFunction(e.target.closest("tr").id);
    });
}
function addUserFunction(log, pass, em) {
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
        addSwitchBtnsAfterAddUserFunction();
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
function saveEditedUserFunction(editableTrId) {
    searchingElementsInTbody(editableTrId);
    loginTdElement.textContent = `${loginInputValue.value}`;
    passwordTdElement.textContent = `${passwordInputValue.value}`;
    emailTdElement.textContent = `${emailInputValue.value}`;
    deleteInputsValue();
    changeBtnToAddUserBtn();
}
function editUserFunction(trId) {
    editableTrId = Number(trId);
    searchingElementsInTbody(editableTrId);
    hidenInputId.value = trElement.id;
    loginInputValue.value = loginTdElement.textContent;
    passwordInputValue.value = passwordTdElement.textContent;
    emailInputValue.value = emailTdElement.textContent;
    changeBtnToSaveEditedUserBtn();
}
function deleteUserFunction(trId) {
    searchingElementsInTbody(Number(trId));
    numberOfPreviousTh();
    trElement.parentElement.removeChild(trElement);
    numberingOfTrElements(numberOfPreviousThInArrayOfTbodyTh);
    if (trElement.id === hidenInputId.value) {
        deleteInputsValue();
        changeBtnToAddUserBtn();
    }
    addSwitchBtnsAfterDeleteUserFunction();
}
function upUserFunction(trId) {
    searchingElementsInTbody(Number(trId));
    let loginPreviousTdElement = trElement.previousElementSibling.querySelector(".login");
    let passwordPreviousTdElement = trElement.previousElementSibling.querySelector(".password");
    let emailPreviousTdElement = trElement.previousElementSibling.querySelector(".email");
    let loginPreviousTdElementTextContent = loginPreviousTdElement.textContent;
    let passwordPreviousTdElementTextContent = passwordPreviousTdElement.textContent;
    let emailPreviousTdElementTextContent = emailPreviousTdElement.textContent;
    let loginTdElementTextContent = loginTdElement.textContent;
    let passwordTdElementTextContent = passwordTdElement.textContent;
    let emailTdElementTextContent = emailTdElement.textContent;
    loginPreviousTdElement.textContent = loginTdElementTextContent;
    passwordPreviousTdElement.textContent = passwordTdElementTextContent;
    emailPreviousTdElement.textContent = emailTdElementTextContent;
    loginTdElement.textContent = loginPreviousTdElementTextContent;
    passwordTdElement.textContent = passwordPreviousTdElementTextContent;
    emailTdElement.textContent = emailPreviousTdElementTextContent;
}
function downUserFunction(trId) {
    searchingElementsInTbody(Number(trId));
    let loginNextTdElement = trElement.nextElementSibling.querySelector(".login");
    let passwordNextTdElement = trElement.nextElementSibling.querySelector(".password");
    let emailNextTdElement = trElement.nextElementSibling.querySelector(".email");
    let loginNextTdElementTextContent = loginNextTdElement.textContent;
    let passwordNextTdElementTextContent = passwordNextTdElement.textContent;
    let emailNextTdElementTextContent = emailNextTdElement.textContent;
    let loginTdElementTextContent = loginTdElement.textContent;
    let passwordTdElementTextContent = passwordTdElement.textContent;
    let emailTdElementTextContent = emailTdElement.textContent;
    loginNextTdElement.textContent = loginTdElementTextContent;
    passwordNextTdElement.textContent = passwordTdElementTextContent;
    emailNextTdElement.textContent = emailTdElementTextContent;
    loginTdElement.textContent = loginNextTdElementTextContent;
    passwordTdElement.textContent = passwordNextTdElementTextContent;
    emailTdElement.textContent = emailNextTdElementTextContent;
}
function searchingElementsInTbody(trId) {
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
    }
    else {
        numberOfPreviousThInArrayOfTbodyTh = 1;
    }
}
function numberingOfTrElements(numberOfPreviousThInArrayOfTbodyTh) {
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
            }
            else {
                existingEmailValue = false;
            }
        }
    }
}
function addSwitchBtnsAfterAddUserFunction() {
    let arrayTdSwichBtns = document.querySelectorAll(".swich-btns");
    if (arrayTdSwichBtns.length === 2) {
        let tagFirstButtonDown = document.createElement('button');
        tagFirstButtonDown.classList.add("btn-down");
        tagFirstButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
        tagFirstButtonDown.style.padding = "10px 25px";
        arrayTdSwichBtns[0].append(tagFirstButtonDown);
        addListererToDownBtns(tagFirstButtonDown);
        let tagLastButtonUp = document.createElement('button');
        tagLastButtonUp.classList.add("btn-up");
        tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
        tagLastButtonUp.style.padding = "10px 25px";
        arrayTdSwichBtns[arrayTdSwichBtns.length - 1].append(tagLastButtonUp);
        addListererToUpBtns(tagLastButtonUp);
    }
    if (arrayTdSwichBtns.length > 2) {
        let tagTdBtns = document.createElement('td');
        tagTdBtns.classList.add("swich-btns");
        let tagButtonUp = document.createElement('button');
        let tagButtonDown = document.createElement('button');
        tagButtonUp.classList.add("btn-up");
        tagButtonDown.classList.add("btn-down");
        tagButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
        tagButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
        tagTdBtns.append(tagButtonUp);
        tagTdBtns.append(tagButtonDown);
        arrayTdSwichBtns[arrayTdSwichBtns.length - 2].replaceWith(tagTdBtns);
        addListererToUpBtns(tagButtonUp);
        addListererToDownBtns(tagButtonDown);
        let tagLastButtonUp = document.createElement('button');
        tagLastButtonUp.classList.add("btn-up");
        tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
        tagLastButtonUp.style.padding = "10px 25px";
        arrayTdSwichBtns[arrayTdSwichBtns.length - 1].append(tagLastButtonUp);
        addListererToUpBtns(tagLastButtonUp);
    }
}
function addSwitchBtnsAfterDeleteUserFunction() {
    let arrayTdSwichBtns = document.querySelectorAll(".swich-btns");
    if (arrayTdSwichBtns.length === 1) {
        arrayTdSwichBtns[0].children[0].remove();
    }
    if (arrayTdSwichBtns.length >= 2) {
        let tagTdBtn1 = document.createElement('td');
        tagTdBtn1.classList.add("swich-btns");
        let tagFirstButtonDown = document.createElement('button');
        tagFirstButtonDown.classList.add("btn-down");
        tagFirstButtonDown.innerHTML = "<i class='fa fa-angle-down'></i>";
        tagFirstButtonDown.style.padding = "10px 25px";
        tagTdBtn1.append(tagFirstButtonDown);
        arrayTdSwichBtns[0].replaceWith(tagTdBtn1);
        addListererToDownBtns(tagFirstButtonDown);
        let tagTdBtn2 = document.createElement('td');
        tagTdBtn2.classList.add("swich-btns");
        let tagLastButtonUp = document.createElement('button');
        tagLastButtonUp.classList.add("btn-up");
        tagLastButtonUp.innerHTML = "<i class='fa fa-angle-up'></i>";
        tagLastButtonUp.style.padding = "10px 25px";
        tagTdBtn2.append(tagLastButtonUp);
        arrayTdSwichBtns[arrayTdSwichBtns.length - 1].replaceWith(tagTdBtn2);
        addListererToUpBtns(tagLastButtonUp);
    }
}
