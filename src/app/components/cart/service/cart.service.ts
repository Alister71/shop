import { Injectable } from '@angular/core';
import {CartItem} from '../model/cartItem';
import {Product} from '../../products/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Array<CartItem> = [];

  get getProducts(): Array<CartItem> {
    return this.cartProducts;
  }

  public addProductToCard(product: Product): void {
    this.cartProducts.push(CartItem.addCartItemByProduct(product));
  }

  public addProduct(product: Product, productNumber = 1): void {
    for (let i = 0; i < productNumber; ++i) {
      this.cartProducts.push(CartItem.addCartItemByProduct(product));
    }
  }

  get totalCost(): number {
    return this.cartProducts.reduce((sum: number, current: CartItem) => sum + current.price * current.quantity, 0);
  }

  get totalQuantity(): number {
    return this.cartProducts.reduce((sum: number, current: CartItem) => sum + current.quantity, 0);
  }

  isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  removeAllProducts(): void {
    this.cartProducts.length = 0;
  }

  deleteItem(cartItem: CartItem): void {
    const index = this.cartProducts.indexOf(cartItem, 0);
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
  }

}
