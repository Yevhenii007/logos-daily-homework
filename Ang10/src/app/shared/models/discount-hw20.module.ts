import { IDiscount } from '../interfaces/discount-hw20.interface';

export class Discount implements IDiscount {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public image?: string,
  ) { }
}
