import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../../products/model/product';

export class CartItem {
  constructor(
    public name: string,
    public description: string,
    public category: CategoryEnum,
    public price: number,
    public quantity: number
  ) {
  }

  public static addCartItemByProduct(product: Product): CartItem {
    return new CartItem(product.name, product.description, product.category, product.price, 1);
  }

}
