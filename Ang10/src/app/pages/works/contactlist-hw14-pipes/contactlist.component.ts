import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { IContact } from '../../../shared/interfaces/contact.interface';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  public firstNameInput: string;
  public lastNameInput: string;
  public phoneNumberInput: string;

  public arrayObjContact: Array<IContact> = [
    {
      id: 1,
      firstName: 'Petro',
      lastName: 'Ivanov',
      phoneNumber: '0504853279'
    },
    {
      id: 2,
      firstName: 'Valeria',
      lastName: 'Hlibova',
      phoneNumber: '0997951872'
    },
    {
      id: 3,
      firstName: 'Artem',
      lastName: 'Bohdan',
      phoneNumber: '066087145287'
    },
    {
      id: 4,
      firstName: 'Vasyl',
      lastName: 'Kohan',
      phoneNumber: '0509681452384'
    },
    {
      id: 5,
      firstName: 'Alina',
      lastName: 'Petrova',
      phoneNumber: '0974652879361'
    },
  ];
  public search: string;
  public editedObjId: number;

  public sortArrayByFirstName: boolean;
  public sortArrayByLastName: boolean;
  public sortArrayByPhoneNumber: boolean;
  public arrowFirstNameDirection: string;
  public arrowLastNameDirection: string;
  public arrowPhoneNumberDirection: string;


  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.subscriptions.push(
      this.modalRef.onHidden.subscribe(() => {
        this.unsubscribe();
      })
    );
  }
  unsubscribe(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
    this.firstNameInput = '';
    this.lastNameInput = '';
    this.phoneNumberInput = '';
  }

  save(): void {
    if (
      this.firstNameInput &&
      this.lastNameInput &&
      this.phoneNumberInput &&
      !isNaN(Number(this.phoneNumberInput))
    ) {
      const foundedObjContactIndexByPhoneNumber = this.arrayObjContact.findIndex(item => item.phoneNumber === this.phoneNumberInput);
      if (foundedObjContactIndexByPhoneNumber !== -1) {
        alert('Such phone number already exist!');
      } else {
        const foundedObjContactIndexById = this.arrayObjContact.findIndex(item => item.id === this.editedObjId);
        if (foundedObjContactIndexById !== -1) {
          this.arrayObjContact[foundedObjContactIndexById].firstName = this.firstNameInput;
          this.arrayObjContact[foundedObjContactIndexById].lastName = this.lastNameInput;
          this.arrayObjContact[foundedObjContactIndexById].phoneNumber = this.phoneNumberInput;
          this.editedObjId = undefined;
        } else {
          const objContact: IContact = new Contact(1, this.firstNameInput, this.lastNameInput, this.phoneNumberInput);
          if (this.arrayObjContact.length > 0) {
            objContact.id = this.arrayObjContact.slice(-1)[0].id + 1;
          }
          this.arrayObjContact.push(objContact);
        }
        this.firstNameInput = '';
        this.lastNameInput = '';
        this.phoneNumberInput = '';
        this.modalRef.hide();
      }
    } else {
      alert('Not enough data or incorect type of number!');
    }
  }
  editTask(objContact: IContact): void {
    this.editedObjId = objContact.id;
    this.firstNameInput = objContact.firstName;
    this.lastNameInput = objContact.lastName;
    this.phoneNumberInput = objContact.phoneNumber;
  }
  deleteTask(objContact: IContact): void {
    const foundedObjContactIndexById = this.arrayObjContact.findIndex(item => item.id === objContact.id);
    this.arrayObjContact.splice(foundedObjContactIndexById, 1);
  }
  firstNameFunc(): void {
    this.arrowLastNameDirection = '';
    this.arrowPhoneNumberDirection = '';
    this.sortArrayByFirstName = !this.sortArrayByFirstName;
    if (this.sortArrayByFirstName) {
      this.arrowFirstNameDirection = 'fa fa-chevron-down';
      this.arrayObjContact.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else {
      this.arrowFirstNameDirection = 'fa fa-chevron-up';
      this.arrayObjContact.sort((a, b) => b.firstName.localeCompare(a.firstName));
    }
  }
  lastNameFunc(): void {
    this.arrowFirstNameDirection = '';
    this.arrowPhoneNumberDirection = '';
    this.sortArrayByLastName = !this.sortArrayByLastName;
    if (this.sortArrayByLastName) {
      this.arrowLastNameDirection = 'fa fa-chevron-down';
      this.arrayObjContact.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else {
      this.arrowLastNameDirection = 'fa fa-chevron-up';
      this.arrayObjContact.sort((a, b) => b.lastName.localeCompare(a.lastName));
    }
  }
  phoneNumberFunc(): void {
    this.arrowFirstNameDirection = '';
    this.arrowLastNameDirection = '';
    this.sortArrayByPhoneNumber = !this.sortArrayByPhoneNumber;
    if (this.sortArrayByPhoneNumber) {
      this.arrowPhoneNumberDirection = 'fa fa-chevron-up';
      this.arrayObjContact.sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
    } else {
      this.arrowPhoneNumberDirection = 'fa fa-chevron-down';
      this.arrayObjContact.sort((a, b) => b.phoneNumber.localeCompare(a.phoneNumber));
    }
  }
}
