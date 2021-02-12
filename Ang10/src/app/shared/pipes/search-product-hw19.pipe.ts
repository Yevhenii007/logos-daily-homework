import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product-hw19.interface';

@Pipe({
  name: 'searchProductHw19'
})
export class SearchProductHw19Pipe implements PipeTransform {

  transform(arrayProducts: Array<IProduct>, product: any): unknown {
    if (!arrayProducts) {
      return [];
    }
    if (!product) {
      return arrayProducts;
    }

    const foundedProductByCategory =
    arrayProducts.filter(item => item.category.nameEN.toLowerCase().includes(product.toLowerCase()));
    if (foundedProductByCategory.length !== 0) {
      return foundedProductByCategory;
    }

    const foundedProductByNameEN =
    arrayProducts.filter(item => item.nameEN.toLowerCase().includes(product.toLowerCase()));
    if (foundedProductByNameEN.length !== 0) {
      return foundedProductByNameEN;
    }

    const foundedProductByNameUA =
    arrayProducts.filter(item => item.nameUA.toLowerCase().includes(product.toLowerCase()));
    if (foundedProductByNameUA.length !== 0) {
      return foundedProductByNameUA;
    }

    const foundedProductByDescription =
    arrayProducts.filter(item => item.description.toLowerCase().includes(product.toLowerCase()));
    if (foundedProductByDescription.length !== 0) {
      return foundedProductByDescription;
    }

    const foundedProductByWeight =
    arrayProducts.filter(item => item.weight.toLowerCase().includes(product.toLowerCase()));
    if (foundedProductByWeight.length !== 0) {
      return foundedProductByWeight;
    }

    const foundedProductByPrice =
    arrayProducts.filter(item => String(item.price).includes(product));
    if (foundedProductByPrice.length !== 0) {
      return foundedProductByPrice;
    }



  }

}
