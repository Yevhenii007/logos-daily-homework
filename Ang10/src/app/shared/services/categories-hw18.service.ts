import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category-hw18.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsHw18Service {

  private urlCategories: string;
  constructor(private http: HttpClient) {
    this.urlCategories = 'http://localhost:3000/categories';
  }

  getCategoriesJSON(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.urlCategories);
  }

  addCategoriesJSON(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.urlCategories, category);
  }

  deleteCategoriesJSON(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`${ this.urlCategories }/${id}`);
  }

}
