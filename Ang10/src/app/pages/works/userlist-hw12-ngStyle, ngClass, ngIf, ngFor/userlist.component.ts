import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  loginValue: string;
  passwordValue: string;
  emailValue: string;

  arrayUsers: Array<any> = [];

  userIndex: number;
  editSaveBtn: boolean;



  constructor() { }

  ngOnInit(): void {
  }



  addUser(): void {
    if (this.loginValue && this.passwordValue && this.emailValue) {
      this.arrayUsers.push({ login: this.loginValue, password: this.passwordValue, email: this.emailValue });
      this.loginValue = '';
      this.passwordValue = '';
      this.emailValue = '';
    } else {
      alert('Add more data');
    }
  }
  saveUser(): void {
    this.arrayUsers[this.userIndex].login = this.loginValue;
    this.arrayUsers[this.userIndex].password = this.passwordValue;
    this.arrayUsers[this.userIndex].email = this.emailValue;
    this.loginValue = '';
    this.passwordValue = '';
    this.emailValue = '';
    this.editSaveBtn = !this.editSaveBtn;
  }
  editUser(index: number): void {
    this.loginValue = this.arrayUsers[index].login;
    this.passwordValue = this.arrayUsers[index].password;
    this.emailValue = this.arrayUsers[index].email;
    this.userIndex = index;
    this.editSaveBtn = !this.editSaveBtn;
  }
  deleteUser(index: number): void {
    this.arrayUsers.splice(index, 1);
  }

}
