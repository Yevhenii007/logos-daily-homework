let addUserBtn = document.querySelector("input[value='Add user']");
let saveEditedUserBtn = document.querySelector("input[value='Save edited user']");
let loginInputValue = document.querySelectorAll("input[class='form-control'")[0];
let passwordInputValue = document.querySelectorAll("input[class='form-control'")[1];
let emailInputValue = document.querySelectorAll("input[class='form-control'")[2];
let editUserBtn;
let deleteUserBtn;
let tbody = document.querySelector("tbody");
let arrayUsers = [];
let userIndex;
let lastAssignedIndex = 0;
class Obj {
    constructor(id, login, password, email) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.email = email;
    }
    generateObj() {
        return { ...this };
    }
}
addUserBtn.addEventListener("click", function () {
    addUserFunction(loginInputValue.value, passwordInputValue.value, emailInputValue.value);
});
saveEditedUserBtn.addEventListener("click", function () {
    saveEditedUserFunction();
});
function renderElementWithClickHandlers() {
    render();
    editUserBtn = document.querySelectorAll("input[value='Edit']");
    deleteUserBtn = document.querySelectorAll("input[value='Delete']");
    for (let index = 0; index < arrayUsers.length; index++) {
        editUserBtn[index].addEventListener("click", function (e) {
            editUserFunction(e.target.closest("tr").id);
        });
        deleteUserBtn[index].addEventListener("click", function (e) {
            deleteUserFunction(e.target.closest("tr").id);
            if (arrayUsers.length === 0) {
                loginInputValue.value = '';
                passwordInputValue.value = '';
                emailInputValue.value = '';
                addUserBtn.classList.remove("d-none");
                saveEditedUserBtn.classList.add("d-none");
            }
        });
    }
}
function addUserFunction(log, pass, em) {
    if (loginInputValue.value && passwordInputValue.value && emailInputValue.value) {
        let obj = { id: lastAssignedIndex, login: log, password: pass, email: em };
        lastAssignedIndex++;
        arrayUsers.push(obj);
        loginInputValue.value = '';
        passwordInputValue.value = '';
        emailInputValue.value = '';
        renderElementWithClickHandlers();
    }
    else {
        alert('Please enter more data.');
    }
}
function saveEditedUserFunction() {
    let res = new Obj(arrayUsers[userIndex].id, loginInputValue.value, passwordInputValue.value, emailInputValue.value);
    arrayUsers.splice(userIndex, 1, res.generateObj());
    loginInputValue.value = '';
    passwordInputValue.value = '';
    emailInputValue.value = '';
    addUserBtn.classList.remove("d-none");
    saveEditedUserBtn.classList.add("d-none");
    renderElementWithClickHandlers();
}
function editUserFunction(id) {
    userIndex = getElementIndexById(Number(id));
    loginInputValue.value = arrayUsers[userIndex].login;
    passwordInputValue.value = arrayUsers[userIndex].password;
    emailInputValue.value = arrayUsers[userIndex].email;
    addUserBtn.classList.add("d-none");
    saveEditedUserBtn.classList.remove("d-none");
}
function deleteUserFunction(id) {
    let elemIndex = getElementIndexById(Number(id));
    arrayUsers.splice(elemIndex, 1);
    renderElementWithClickHandlers();
}
function getElementIndexById(id) {
    for (let index = 0; index < arrayUsers.length; index++) {
        if (arrayUsers[index].id === id) {
            return index;
        }
    }
    throw new Error(`NO ELEMENT BY ID ${id} FOUND`);
}
function render() {
    tbody.innerHTML = '';
    for (let i = 0; i < arrayUsers.length; i++) {
        tbody.innerHTML += `
    <tr id="${arrayUsers[i].id}">
      <th scope="row">${i + 1}</th>
      <td>${arrayUsers[i].login}</td>
      <td>${arrayUsers[i].password}</td>
      <td>${arrayUsers[i].email}</td>
      <td>
        <input type="button" class="btn btn-warning" value="Edit"/>
      </td>
      <td>
        <input type="button" class="btn btn-danger" value="Delete"/>
      </td>
    </tr>`;
    }
}
