import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './contact.interface';

@Pipe({
  name: 'searchContact'
})
export class SearchContactPipe implements PipeTransform {

  transform(arrayObjContacts: Array<IContact>, contact: string): unknown {
    if (!arrayObjContacts) {
      return [];
    }
    if (!contact) {
      return arrayObjContacts;
    }
    const foundedContactByFirstName =
      arrayObjContacts.filter(item => item.firstName.toLowerCase().includes(contact.toLowerCase()));
    const foundedContactByLastName =
      arrayObjContacts.filter(item => item.lastName.toLowerCase().includes(contact.toLowerCase()));
    const foundedContactByPhoneNumber =
      arrayObjContacts.filter(item => item.phoneNumber.toLowerCase().includes(contact.toLowerCase()));

    // const arr = [];

    // if (
    //   foundedContactByFirstName.length !== 0 ||
    //   foundedContactByLastName.length !== 0
    // ) {
    //   return arr.concat(foundedContactByFirstName, foundedContactByLastName);
    // }
    if (foundedContactByFirstName.length !== 0) {
      return foundedContactByFirstName;
    }
    if (foundedContactByLastName.length !== 0) {
      return foundedContactByLastName;
    }
    if (foundedContactByPhoneNumber.length !== 0) {
      return foundedContactByPhoneNumber;
    }
  }
}
