import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../interfaces/category-hw18.interface';

@Pipe({
  name: 'searchCategoryHw18'
})
export class SearchCategoryHw18Pipe implements PipeTransform {

  transform(arrayObjCategories: Array<ICategory>, category: string): unknown {
    if (!arrayObjCategories) {
      return [];
    }
    if (!category) {
      return arrayObjCategories;
    }
    const foundedCategoryByNameEN =
    arrayObjCategories.filter(item => item.nameEN.toLowerCase().includes(category.toLowerCase()));
    const foundedCategoryByNameUA =
    arrayObjCategories.filter(item => item.nameUA.toLowerCase().includes(category.toLowerCase()));

    if (foundedCategoryByNameEN.length !== 0) {
      return foundedCategoryByNameEN;
    }
    if (foundedCategoryByNameUA.length !== 0) {
      return foundedCategoryByNameUA;
    }
  }

}
