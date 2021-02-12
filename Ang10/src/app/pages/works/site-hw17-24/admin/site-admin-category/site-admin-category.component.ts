import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/category-hw18.interface';
import { ComponentsHw18Service } from 'src/app/shared/services/categories-hw18.service';
import { Category } from 'src/app/shared/models/category-hw18.module';

@Component({
  selector: 'app-site-admin-category',
  templateUrl: './site-admin-category.component.html',
  styleUrls: ['./site-admin-category.component.scss']
})
export class SiteAdminCategoryComponent implements OnInit {

  categoryID = 1;
  nameEN = '';
  nameUA = '';

  adminCategoriesArray: Array<ICategory> = [];

  arrowOrderNumberDirection = 'fa fa-chevron-up';
  arrowNameEnDirection: string;
  arrowNameUaDirection: string;
  reverseStatus = true;
  arrowNameEnStatus: boolean;
  arrowNameUaStatus: boolean;
  order: string;

  numeberingStatus: boolean;
  deletedCategoryId: number;
  search: string;

  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(private modalService: BsModalService, private categoryService: ComponentsHw18Service) { }

  ngOnInit(): void {
    this.getCategory();
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered' })
    );
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
    this.resetInputs();
  }
  resetInputs(): void {
    this.nameEN = '';
    this.nameUA = '';
  }

  getCategory(): void {
    this.categoryService.getCategoriesJSON().subscribe(
      data => {
        this.adminCategoriesArray = data;
      }
    );
    // setTimeout(() => {
    //   if (this.adminCategoriesArray.length !== 0) {
    //     if (this.adminCategoriesArray.length > 1) {
    //       this.adminCategoriesArray.slice(-1)[0].index = this.adminCategoriesArray.slice().reverse()[1].index + 1;
    //     } else {
    //       this.adminCategoriesArray.slice(-1)[0].index = 1;
    //     }
    //   }
    // }, 150);
  }

  addCategory(): void {
    const newCategory: ICategory = new Category(1, this.nameEN, this.nameUA);
    delete newCategory.id;
    this.categoryService.addCategoriesJSON(newCategory).subscribe(
      () => {
        this.getCategory();
      }
    );

    // console.log(this.adminCategoriesArray.slice(-1)[0].index + 1);
    // console.log(this.adminCategoriesArray.slice(-1)[0].index + 1);


  }

  getDeletedCategoryId(categoryId: number): void {
    this.deletedCategoryId = categoryId;
  }

  deleteCategory(): void {
    this.categoryService.deleteCategoriesJSON(this.deletedCategoryId).subscribe(
      () => {
        this.getCategory();
      }
    );
    // console.log(this.adminCategoriesArray);
    // console.log(this.deletedCategoryId - 1);
    // for (let index = this.deletedCategoryId - 1; index < this.adminCategoriesArray.length; index++) {
    //   this.adminCategoriesArray[index].index = index;
    //   console.log(this.adminCategoriesArray);
    // }
    // console.log(this.adminCategoriesArray);
  }

  orderByFunction(arrowDirection: string, order: string): void {
    this.arrowOrderNumberDirection = '';
    this.arrowNameEnDirection = '';
    this.arrowNameUaDirection = '';
    this.order = order;
    this.reverseStatus = !this.reverseStatus;
    if (this.reverseStatus) {
      this[arrowDirection] = 'fa fa-chevron-down';
    } else {
      this[arrowDirection] = 'fa fa-chevron-up';
    }
  }

  // orderNumberFunc(): void {
  //   this.arrowNameEnDirection = '';
  //   this.arrowNameUaDirection = '';
  //   this.reverseStatus = !this.reverseStatus;
  //   if (this.reverseStatus) {
  //     this.arrowOrderNumberDirection = 'fa fa-chevron-down';
  //     this.adminCategoriesArray.reverse();
  //     this.numeberingStatus = true;
  //   } else {
  //     this.arrowOrderNumberDirection = 'fa fa-chevron-up';
  //     this.adminCategoriesArray.reverse();
  //     this.numeberingStatus = false;
  //   }
  // }
  // nameENFunc(): void {
  //   this.arrowOrderNumberDirection = '';
  //   this.arrowNameUaDirection = '';
  //   this.arrowNameEnStatus = !this.arrowNameEnStatus;
  //   if (this.arrowNameEnStatus) {
  //     this.arrowNameEnDirection = 'fa fa-chevron-down';
  //     this.adminCategoriesArray.sort((a, b) => a.nameEN.localeCompare(b.nameEN));
  //   } else {
  //     this.arrowNameEnDirection = 'fa fa-chevron-up';
  //     this.adminCategoriesArray.sort((a, b) => b.nameEN.localeCompare(a.nameEN));
  //   }
  // }
  // numberUAFunc(): void {
  //   this.arrowOrderNumberDirection = '';
  //   this.arrowNameEnDirection = '';
  //   this.arrowNameUaStatus = !this.arrowNameUaStatus;
  //   if (this.arrowNameUaStatus) {
  //     this.arrowNameUaDirection = 'fa fa-chevron-down';
  //     this.adminCategoriesArray.sort((a, b) => a.nameUA.localeCompare(b.nameUA));
  //   } else {
  //     this.arrowNameUaDirection = 'fa fa-chevron-up';
  //     this.adminCategoriesArray.sort((a, b) => b.nameUA.localeCompare(a.nameUA));
  //   }
  // }

}
