let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);
let addUserBtn = firstElem("input[value='Add user']");
let editUserBtn = firstElem("input[value='Edit user']");
let logVal = arrayElem("input[class='form-control'")[0];
let passVal = arrayElem("input[class='form-control'")[1];
let emVal = arrayElem("input[class='form-control'")[2];
let tbody = firstElem("tbody");
let arrayUsers = [];
let userIndex;
function addUser(log, pass, em) {
    if (logVal.value && passVal.value && emVal.value) {
        let obj = { login: log, password: pass, email: em };
        arrayUsers.push(obj);
        logVal.value = '';
        passVal.value = '';
        emVal.value = '';
        render();
    }
    else {
        alert('Please enter more data.');
    }
}
function render() {
    tbody.innerHTML = '';
    for (let i = 0; i <= arrayUsers.length; i++) {
        tbody.innerHTML += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${arrayUsers[i].login}</td>
      <td>${arrayUsers[i].password}</td>
      <td>${arrayUsers[i].email}</td>
      <td>
        <input name="${i}" type="button" class="btn btn-warning" value="Edit"/>
      </td>
      <td>
        <input name="${i}" type="button" class="btn btn-danger" value="Delete"/>
      </td>
    </tr>`;
    }
}
class Obj {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
    generateObj() {
        return { login: this.login, password: this.password, email: this.email };
    }
}
function saveEditUser() {
    let res = new Obj(logVal.value, passVal.value, emVal.value);
    arrayUsers.splice(userIndex, 1, res.generateObj());
    logVal.value = '';
    passVal.value = '';
    emVal.value = '';
    addUserBtn.classList.remove("d-none");
    editUserBtn.classList.add("d-none");
    render();
}
addUserBtn.addEventListener("click", function () {
    addUser(logVal.value, passVal.value, emVal.value);
});
editUserBtn.addEventListener("click", function () {
    saveEditUser();
});
tbody.addEventListener("click", function (e) {
    deleteUser(e);
    editUser(e);
});
function deleteUser(e) {
    if (e.target.matches("input[value='Delete']")) {
        let nodes = [].slice.call(document.querySelectorAll("input[value='Delete']"));
        let res = nodes.indexOf(e.target);
        arrayUsers.splice(res, 1);
        render();
    }
}
function editUser(e) {
    if (e.target.matches("input[value='Edit']")) {
        let nodes = [].slice.call(document.querySelectorAll("input[value='Edit']"));
        let res = nodes.indexOf(e.target);
        logVal.value = arrayUsers[res].login;
        passVal.value = arrayUsers[res].password;
        emVal.value = arrayUsers[res].email;
        userIndex = res;
        addUserBtn.classList.add("d-none");
        editUserBtn.classList.remove("d-none");
    }
}
