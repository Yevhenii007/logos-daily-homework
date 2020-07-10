let firstElem = (x: string) => document.querySelector(x);
let arrayElem = (x: string) => document.querySelectorAll(x);

let addUserBtn = firstElem("input[value='Add user']") as HTMLInputElement;
let editUserBtn = firstElem("input[value='Edit user']") as HTMLInputElement;

let logVal = arrayElem("input[class='form-control'")[0] as HTMLInputElement;
let passVal = arrayElem("input[class='form-control'")[1] as HTMLInputElement;
let emVal = arrayElem("input[class='form-control'")[2] as HTMLInputElement;

let tbody = firstElem("tbody") as HTMLTableElement;

let arrayUsers: Array<object> = [];

let userIndex: number;

interface IUser {
  login: string;
  password: string;
  email: string;
  generateObj?(): object;
}

function addUser(log: string, pass: string, em: string): void {
  if (logVal.value && passVal.value && emVal.value) {
    let obj = { login: log, password: pass, email: em };
    arrayUsers.push(obj);
    logVal.value = '';
    passVal.value = '';
    emVal.value = '';
    render();
  }
  else {
    alert('Please enter more data.')
  }
}

function render(): void {
  tbody.innerHTML = '';
  for (let i: number = 0; i <= arrayUsers.length; i++) {
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

class Obj implements IUser {
  constructor(public login: string, public password: string, public email: string) { }
  generateObj(): object {
    return { login: this.login, password: this.password, email: this.email }
  }
}

function saveEditUser(): void {
  let res: IUser = new Obj(logVal.value, passVal.value, emVal.value);
  arrayUsers.splice(userIndex, 1, res.generateObj());
  logVal.value = '';
  passVal.value = '';
  emVal.value = '';
  addUserBtn.classList.remove("d-none");
  editUserBtn.classList.add("d-none");
  render();
}

addUserBtn.addEventListener("click", function (): void {
  addUser(logVal.value, passVal.value, emVal.value);
})

editUserBtn.addEventListener("click", function (): void {
  saveEditUser();
})

////// ! ////////////////////////////////////////////////////////////////

tbody.addEventListener("click", function (e: MouseEvent): void {
  deleteUser(e);
  editUser(e);
})

function deleteUser(e: MouseEvent): void {
  if (e.target.matches("input[value='Delete']")) {
    let nodes = [].slice.call(document.querySelectorAll("input[value='Delete']"))
    let res = nodes.indexOf(e.target)
    arrayUsers.splice(res, 1);
    render();
  }
}

function editUser(e: MouseEvent): void {
  if (e.target.matches("input[value='Edit']")) {
    let nodes = [].slice.call(document.querySelectorAll("input[value='Edit']"))
    let res = nodes.indexOf(e.target)
    logVal.value = arrayUsers[res].login;
    passVal.value = arrayUsers[res].password;
    emVal.value = arrayUsers[res].email;
    userIndex = res;
    addUserBtn.classList.add("d-none")
    editUserBtn.classList.remove("d-none")
  }
}

////// ! ////////////////////////////////////////////////////////////////
