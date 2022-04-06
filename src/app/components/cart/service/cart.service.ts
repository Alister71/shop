import { Injectable } from '@angular/core';
import {CartItem} from '../model/cartItem';
import {Product} from '../../products/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsVar: Array<CartItem> = [];

  get items(): Array<CartItem> {
    return this.itemsVar;
  }

  public addProductToCard(product: Product): void {
    this.itemsVar.push(CartItem.addCartItemByProduct(product));
  }

  get totalCost(): number {
    return this.itemsVar.reduce((sum: number, current: CartItem) => sum + current.price * current.quantity, 0);
  }

  get totalQuantity(): number {
    return this.itemsVar.reduce((sum: number, current: CartItem) => sum + current.quantity, 0);
  }

  cartItemsNotEmpty(): boolean {
    return this.itemsVar.length > 0;
  }

  clearCartItems(): void {
    this.itemsVar.length = 0;
  }

  deleteItem(cartItem: CartItem): void {
    const index = this.itemsVar.indexOf(cartItem, 0);
    if (index > -1) {
      this.itemsVar.splice(index, 1);
    }
  }

}
