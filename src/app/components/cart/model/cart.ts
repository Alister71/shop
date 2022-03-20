import {CategoryEnum} from '../../first/category.enum';

export class Cart {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: CategoryEnum
  ) {
  }
}
