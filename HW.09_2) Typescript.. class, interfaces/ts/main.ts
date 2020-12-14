
let addUserBtn = document.querySelector("input[value='Add user']") as HTMLInputElement;
let saveEditedUserBtn = document.querySelector("input[value='Save edited user']") as HTMLInputElement;

let loginInputValue = document.querySelectorAll("input[class='form-control'")[0] as HTMLInputElement;
let passwordInputValue = document.querySelectorAll("input[class='form-control'")[1] as HTMLInputElement;
let emailInputValue = document.querySelectorAll("input[class='form-control'")[2] as HTMLInputElement;

let editUserBtn: NodeListOf<Element>;
let deleteUserBtn: NodeListOf<Element>;

let tbody = document.querySelector("tbody") as unknown as HTMLTableElement;
let arrayUsers: Array<IUser> = [];
let userIndex: number;

let lastAssignedIndex: number = 0;

interface IUser {
  id: number;
  login: string;
  password: string;
  email: string;
  generateObj?(): IUser;
}
class Obj implements IUser {
  constructor(public id: number, public login: string, public password: string, public email: string) { }
  generateObj(): IUser {
    return { ...this };
  }
}

addUserBtn.addEventListener("click", function (): void {
  addUserFunction(loginInputValue.value, passwordInputValue.value, emailInputValue.value);
})
saveEditedUserBtn.addEventListener("click", function (): void {
  saveEditedUserFunction();
})
function renderElementWithClickHandlers() {
  render();
  editUserBtn = document.querySelectorAll("input[value='Edit']");
  deleteUserBtn = document.querySelectorAll("input[value='Delete']");
  for (let index = 0; index < arrayUsers.length; index++) {
    editUserBtn[index].addEventListener("click", function (e) {
      editUserFunction(e.target.closest("tr").id);
    })
    deleteUserBtn[index].addEventListener("click", function (e) {
      deleteUserFunction(e.target.closest("tr").id);
      if (arrayUsers.length === 0) {
        loginInputValue.value = '';
        passwordInputValue.value = '';
        emailInputValue.value = '';
        addUserBtn.classList.remove("d-none");
        saveEditedUserBtn.classList.add("d-none");
      }
    })
  }
}

function addUserFunction(log: string, pass: string, em: string): void {
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
    alert('Please enter more data.')
  }
}
function saveEditedUserFunction(): void {
  let res: IUser = new Obj(arrayUsers[userIndex].id, loginInputValue.value, passwordInputValue.value, emailInputValue.value);
  arrayUsers.splice(userIndex, 1, res.generateObj());
  loginInputValue.value = '';
  passwordInputValue.value = '';
  emailInputValue.value = '';
  addUserBtn.classList.remove("d-none");
  saveEditedUserBtn.classList.add("d-none");
  renderElementWithClickHandlers();
}
function editUserFunction(id: string): void {
  userIndex = getElementIndexById(Number(id));
  loginInputValue.value = arrayUsers[userIndex].login;
  passwordInputValue.value = arrayUsers[userIndex].password;
  emailInputValue.value = arrayUsers[userIndex].email;
  addUserBtn.classList.add("d-none")
  saveEditedUserBtn.classList.remove("d-none")
}
function deleteUserFunction(id: string): void {
  let elemIndex: number = getElementIndexById(Number(id));
  arrayUsers.splice(elemIndex, 1);
  renderElementWithClickHandlers();
}
function getElementIndexById(id: number) {
  for (let index = 0; index < arrayUsers.length; index++) {
    if (arrayUsers[index].id === id) {
      return index;
    }
  }
  throw new Error(`NO ELEMENT BY ID ${id} FOUND`);
}
function render(): void {
  tbody.innerHTML = '';
  for (let i: number = 0; i < arrayUsers.length; i++) {
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
