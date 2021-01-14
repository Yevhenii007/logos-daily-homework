import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';

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
