import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../../products/model/product';

export class CartItem {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: CategoryEnum,
    public price: number,
    public totalPrice: number,
    public quantity: number
  ) {
  }

  public static addCartItemByProduct(product: Product): CartItem {
    return new CartItem(product.id, product.name, product.description, product.category, product.price, product.price, 1);
  }

  addProduct(product: Product): void {
    if (product.id !== this.id) {
      throw new Error('Invalid product');
    }

    this.totalPrice += product.price;
    this.quantity++;
  }

}
