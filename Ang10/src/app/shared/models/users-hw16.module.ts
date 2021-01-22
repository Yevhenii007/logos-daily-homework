import { IUsers } from '../interfaces/users-hw16.interface';

export class Users implements IUsers {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string
  ) {

  }
}
