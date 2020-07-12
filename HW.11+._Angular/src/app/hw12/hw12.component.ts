import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw12',
  templateUrl: './hw12.component.html',
  styleUrls: ['./hw12.component.scss']
})
export class Hw12Component implements OnInit {

  logVal: string;
  passVal: string;
  emVal: string;

  obj: object;
  arrayUsers: Array<string> = [];

  tableRow: string;

  userIndex: number;

  addUserBtn = true;
  editUserBtn = false;

  constructor() {
    // interface IUser {
    //   login: string;
    //   password: string;
    //   email: string;
    //   generateObj?(): object;
    // }
    // class Obj implements IUser {
    //   constructor(public login: string, public password: string, public email: string) { }
    //   generateObj(): object {
    //     return { login: this.login, password: this.password, email: this.email }
    //   }
    // }
  }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.logVal && this.passVal && this.emVal) {
      this.obj = { login: this.logVal, password: this.passVal, email: this.emVal };
      this.arrayUsers.push(this.obj);
      this.logVal = '';
      this.passVal = '';
      this.emVal = '';
    }
    else {
      alert('Please enter more data.');
    }
  }

  deleteUser(index: number): void {
    this.arrayUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.logVal = this.arrayUsers[index].login;
    this.passVal = this.arrayUsers[index].password;
    this.emVal = this.arrayUsers[index].email;
    this.userIndex = index;
    this.addUserBtn = false;
    this.editUserBtn = true;
  }

  saveEditUser(): void {
    let res = { login: this.logVal, password: this.passVal, email: this.emVal };
    this.arrayUsers.splice(this.userIndex, 1, res);
    this.logVal = '';
    this.passVal = '';
    this.emVal = '';
    this.addUserBtn = true;
    this.editUserBtn = false;
  }
}
