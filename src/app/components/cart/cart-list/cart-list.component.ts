import {Component} from '@angular/core';
import {CartService} from '../service/cart.service';
import {CartItem} from '../model/cartItem';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  constructor(private cartService: CartService) {
  }

  get cartItems(): Array<CartItem> {
    return this.cartService.items;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalCost(): number {
    return this.cartService.totalCost;
  }

  cartNotEmpty(): boolean {
    return this.cartService.cartItemsNotEmpty();
  }

  trackByItems(index: number, item: CartItem): string { return item.name; }

  onClearCart(): void {
    this.cartService.clearCartItems();
  }

  onQuantityIncrease(cartItem: CartItem): void {
    cartItem.quantity++;
  }

  onQuantityDecrease(cartItem: CartItem): void {
    cartItem.quantity--;
  }

  onDeleteItem(cartItem: CartItem): void {
    this.cartService.deleteItem(cartItem);
  }

  lastChange(): Date {
    return new Date();
  }
}
