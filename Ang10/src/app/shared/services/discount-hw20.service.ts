import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiscount } from '../interfaces/discount-hw20.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  // private arrDiscount: Array<IDiscount> = [
  //   {
  //     id: 1,
  //     title: 'Наша фірмова акція 2+1',
  //     text: 'Акция «2+1» действует в понедельник, вторник, среду и четверг. Заказывайте две пиццы и получайте ещё одну бесплатно!',
  //     image: 'https://lapiec-pizza.vn.ua/wp-content/uploads/sites/2/2020/05/aktsiya-dlya-sajta-21.jpg'
  //   }
  // ];

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/discounts';
  }

  // getDiscountsService(): Array<IDiscount> {
  //   return this.arrDiscount;
  // }

  // addDiscountService(discount: IDiscount): void {
  //   this.arrDiscount.push(discount);
  // }

  // deleteDiscount(discount: IDiscount): void {
  //   const index = this.arrDiscount.findIndex(item => item.id === discount.id);
  //   this.arrDiscount.splice(index, 1);
  // }

  // updateDiscount(discount: IDiscount): void {
  //   const index = this.arrDiscount.findIndex(item => item.id === discount.id);
  //   this.arrDiscount.splice(index, 1, discount);
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getJSONDiscounts(): Observable<Array<IDiscount>> { // * Буде повертати дані з сервера відносно this.url
    return this.http.get<Array<IDiscount>>(this.url);
  }
  postJSONDiscount(discount: IDiscount): Observable<IDiscount> {
    return this.http.post<IDiscount>(this.url, discount);
  }
  deleteJSONDiscount(id: number): Observable<IDiscount> {
    return this.http.delete<IDiscount>(`${this.url}/${id}`);
  }
  editJSONDiscount(discount: IDiscount): Observable<IDiscount> {
    return this.http.put<IDiscount>(`${this.url}/${discount.id}`, discount);
  }
  getOneJSONDiscount(id: number): Observable<IDiscount> {
    return this.http.get<IDiscount>(`${this.url}/${id}`);
  }
}
