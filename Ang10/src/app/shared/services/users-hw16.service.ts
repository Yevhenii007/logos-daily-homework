import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/users-hw16.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersHw16Service {
  private arrayUsers: Array<IUsers> = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    }
  ];

  constructor() { }

  getUsersService(): Array<IUsers> {
    return this.arrayUsers;
  }

  addUserService(user: IUsers): void {
    this.arrayUsers.push(user);
  }
}
