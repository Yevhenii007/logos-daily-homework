import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IDiscount } from '../../../../../shared/interfaces/discount-hw20.interface';
import { Discount } from '../../../../../shared/models/discount-hw20.module';
import { DiscountService } from 'src/app/shared/services/discount-hw20.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-site-admin-discount',
  templateUrl: './site-admin-discount.component.html',
  styleUrls: ['./site-admin-discount.component.scss']
})
export class SiteAdminDiscountComponent implements OnInit {

  searchWord: string;
  propertiesSearch: Array<string> = ['title', 'text'];

  order: string;
  reverseStatus = true;

  arrowOrderNumberDirection = 'fa fa-chevron-up';
  arrowTitleDirection: string;
  arrowTextDirection: string;

  discountID = 1;
  discountTitle = '';
  discountText = '';
  discountImage = '';

  uploadProgressStatus: boolean;
  uploadProgress: Observable<number>;
  imageStatus: boolean;

  arrayDiscounts: Array<IDiscount> = [];
  editStatus: boolean;
  deletedDiscountId: number;

  constructor(
    private discountService: DiscountService,
    private angularFireStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  private getDiscounts(): void {
    this.discountService.getJSONDiscounts().subscribe(
      data => {
        this.arrayDiscounts = data;
      }
    );
  }

  addDiscount(): void {
    const newDiscount: IDiscount = new Discount(
      this.discountID,
      this.discountTitle,
      this.discountText,
      this.discountImage,
    );
    if (!this.editStatus) {
      delete newDiscount.id;
      this.discountService.postJSONDiscount(newDiscount).subscribe(
        () => {
          this.getDiscounts();
        }
      );
    } else {
      this.discountService.editJSONDiscount(newDiscount).subscribe(
        () => {
          this.getDiscounts();
        }
      );
      this.editStatus = false;
    }
  }
  editDiscount(discount: IDiscount): void {
    this.editStatus = true;
    this.discountID = discount.id;
    this.discountTitle = discount.title;
    this.discountText = discount.text;
    this.discountImage = discount.image;
    this.imageStatus = true;
  }

  getDeletedDiscountId(discountId: number): void {
    this.deletedDiscountId = discountId;
  }
  deleteDiscount(): void {
    this.discountService.deleteJSONDiscount(this.deletedDiscountId).subscribe(
      () => {
        this.getDiscounts();
      }
    );
  }
  resetInputs(): void {
    this.discountTitle = '';
    this.discountText = '';
    this.discountImage = '';
    this.imageStatus = false;
    this.resetImage();
  }
  resetImage(): void {
    this.imageStatus = false;
    this.uploadProgressStatus = false;
    this.discountImage = '';
  }
  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    const filePath = `images/${name}.${type}`;
    console.log(file, type, name, filePath);
    const task = this.angularFireStorage.upload(filePath, file);
    this.uploadProgressStatus = true;
    this.uploadProgress = task.percentageChanges();
    task.then(image => {
      this.angularFireStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.discountImage = url;
        this.imageStatus = true;
      });
    });
  }

  orderByFunction(arrowDirection: string, order: string): void {
    this.arrowOrderNumberDirection = '';
    this.arrowTitleDirection = '';
    this.arrowTextDirection = '';
    this.order = order;
    this.reverseStatus = !this.reverseStatus;
    if (this.reverseStatus) {
      this[arrowDirection] = 'fa fa-chevron-down';
    } else {
      this[arrowDirection] = 'fa fa-chevron-up';
    }
  }

}
