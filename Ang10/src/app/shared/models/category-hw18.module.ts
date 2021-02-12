import { ICategory } from '../interfaces/category-hw18.interface';

export class Category implements ICategory {
  constructor(
    public id: number,
    public nameEN: string,
    public nameUA: string,
    public index?: number,
  ) { }
}
