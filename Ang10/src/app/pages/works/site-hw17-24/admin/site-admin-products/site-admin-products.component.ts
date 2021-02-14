import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/category-hw18.interface';
import { IProduct } from 'src/app/shared/interfaces/product-hw19.interface';
import { Product } from 'src/app/shared/models/product-hw19.module';
import { ComponentsHw18Service } from 'src/app/shared/services/categories-hw18.service';
import { ProductService } from 'src/app/shared/services/product-hw19.service';

@Component({
  selector: 'app-site-admin-products',
  templateUrl: './site-admin-products.component.html',
  styleUrls: ['./site-admin-products.component.scss']
})
export class SiteAdminProductsComponent implements OnInit {


  categoriesArray: Array<ICategory> = [];
  categoryName: string;
  productsArray: Array<IProduct> = [];
  productCategory: ICategory;
  productID = 1;
  productNameEN: string;
  productNameUA: string;
  productDescription: string;
  productWeight: string;
  productPrice: number;
  productImage: string;
  imageStatus: boolean;
  search: string;
  editStatus: boolean;
  deletedProductId: number;
  arrowStatus: any;
  uploadProgressStatus: boolean;

  arrowOrderNumberDirection = 'fa fa-chevron-up';
  arrowCategoryNameDirection: string;
  arrowNameEnDirection: string;
  arrowNameUaDirection: string;
  arrowDescriptionDirection: string;
  arrowWeightDirection: string;
  arrowPriceDirection: string;

  order: string;
  reverseStatus = true;

  uploadProgress: Observable<number>;

  @ViewChild('inputFile') myInputVariable: ElementRef;

  constructor(
    private catService: ComponentsHw18Service,
    private prodService: ProductService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  private getCategories(): void {
    this.catService.getCategoriesJSON().subscribe(
      data => {
        this.categoriesArray = data;
      }
    );
  }

  private getProducts(): void {
    this.prodService.getJSONProduct().subscribe(
      data => {
        this.productsArray = data;
      }
    );
  }

  addProduct(lgModal): void {
    const newProduct: IProduct = new Product(
      this.productID,
      this.productCategory,
      this.productNameEN,
      this.productNameUA,
      this.productDescription,
      this.productWeight,
      this.productPrice,
      this.productImage
    );
    if (
      this.categoryName !== '' &&
      this.productNameEN.trim() !== '' &&
      this.productNameUA.trim() !== '' &&
      this.productDescription.trim() !== '' &&
      this.productWeight.trim() !== '' &&
      this.productImage.trim() !== '' &&
      this.productPrice !== null
    ) {
      if (!this.editStatus) {
        delete newProduct.id;
        this.prodService.postJSONProduct(newProduct).subscribe(
          () => {
            this.getProducts();
          }
        );
        lgModal.hide();
        this.resetInputs();
      } else {
        this.prodService.editJSONProduct(newProduct).subscribe(
          () => {
            this.getProducts();
          }
        );
        this.editStatus = false;
        lgModal.hide();
        this.resetInputs();
      }
    } else {
      alert('Please, add more data!');
    }
  }

  setCategory(): void {
    this.productCategory = this.categoriesArray.filter(cat => cat.nameEN === this.categoryName)[0];
  }

  // checkCategory(): void {
  //   console.log(this.categoryName);
  //   console.log(this.productCategory);
  // }

  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    // console.log(file, type, name);
    const filePath = `images/${name}.${type}`;
    const task = this.afStorage.upload(filePath, file);
    this.uploadProgressStatus = true;
    this.uploadProgress = task.percentageChanges();
    task.then(image => {
      this.afStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.productImage = url;
        this.imageStatus = true;
      });
    });
  }

  resetInputs(): void {
    this.categoryName = '';
    this.productNameEN = '';
    this.productNameUA = '';
    this.productDescription = '';
    this.productWeight = '';
    this.productImage = '';
    this.productPrice = null;
    this.imageStatus = false;
    this.uploadProgress = undefined;
    this.myInputVariable.nativeElement.value = '';
    this.uploadProgressStatus = false;
  }
  resetImage(): void {
    this.imageStatus = false;
    this.uploadProgressStatus = false;
    this.productImage = '';
  }

  getEditedProductId(product: IProduct): void {
    this.productID = product.id;
    this.categoryName = product.category.nameEN;
    this.productNameEN = product.nameEN;
    this.productNameUA = product.nameUA;
    this.productDescription = product.description;
    this.productWeight = product.weight;
    this.productPrice = product.price;
    this.productImage = product.image;
    this.editStatus = true;
    this.imageStatus = true;
  }

  getDeletedProductId(productId: number): void {
    this.deletedProductId = productId;
  }

  deletePruduct(): void {
    this.prodService.deleteJSONProduct(this.deletedProductId).subscribe(
      () => {
        this.getProducts();
      }
    );
  }

  orderByFunction(arrowDirection: string, order: string): void {
    this.arrowOrderNumberDirection = '';
    this.arrowCategoryNameDirection = '';
    this.arrowNameEnDirection = '';
    this.arrowNameUaDirection = '';
    this.arrowDescriptionDirection = '';
    this.arrowWeightDirection = '';
    this.arrowPriceDirection = '';
    this.order = order;
    this.reverseStatus = !this.reverseStatus;
    if (this.reverseStatus) {
      this[arrowDirection] = 'fa fa-chevron-down';
    } else {
      this[arrowDirection] = 'fa fa-chevron-up';
    }
  }

  // arrowFunc(arrowDirection: string, property: string): void {
  //   this.arrowOrderNumberDirection = '';
  //   this.arrowCategoryNameDirection = '';
  //   this.arrowNameEnDirection = '';
  //   this.arrowNameUaDirection = '';
  //   this.arrowDescriptionDirection = '';
  //   this.arrowWeightDirection = '';
  //   this.arrowPriceDirection = '';
  //   this.arrowStatus = !this.arrowStatus;
  //   if (property === 'category') {
  //     if (this.arrowStatus) {
  //       this[arrowDirection] = 'fa fa-chevron-down';
  //       this.productsArray.sort((a, b) => a.category.nameEN.localeCompare(b.category.nameEN));
  //     } else {
  //       this[arrowDirection] = 'fa fa-chevron-up';
  //       this.productsArray.sort((a, b) => b.category.nameEN.localeCompare(a.category.nameEN));
  //     }
  //   } else {
  //     if (this.arrowStatus) {
  //       this[arrowDirection] = 'fa fa-chevron-down';
  //       this.productsArray.sort((a, b) => String(a[property]).localeCompare(String(b[property])));
  //     } else {
  //       this[arrowDirection] = 'fa fa-chevron-up';
  //       this.productsArray.sort((a, b) => String(b[property]).localeCompare(String(a[property])));
  //     }
  //   }
  // }

  // orderNumberFunc(): void {

  // }
  // categoryNameFunc(): void {

  // }
  // nameENFunc(): void {

  // }
  // numberUAFunc(): void {

  // }
  // arrowDescriptionFunc(): void {

  // }
  // arrowWeightFunc(): void {

  // }
  // arrowPriceFunc(): void {

  // }
}
