import {Component} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {CartItem} from '../../model/cartItem';
import {SortOptions} from '../../../../shared/models/sort-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  sortOptions: SortOptions = new SortOptions('name', 'asc');

  constructor(private cartService: CartService,
              private router: Router
  ) {
  }

  get cartItems(): Array<CartItem> {
    this.cartService.onSortChange(this.sortOptions);
    return this.cartService.getCartProducts;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalCost(): number {
    return this.cartService.totalCost;
  }

  cartNotEmpty(): boolean {
    return !this.cartService.isEmptyCart();
  }

  trackByItems(index: number, item: CartItem): string { return item.name; }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }

  onQuantityIncrease(cartItem: CartItem): void {
    this.cartService.onQuantityIncrease(cartItem);
  }

  onQuantityDecrease(cartItem: CartItem): void {
    this.cartService.onQuantityDecrease(cartItem);
  }

  onDeleteItem(cartItem: CartItem): void {
    this.cartService.deleteItem(cartItem);
  }

  lastChange(): Date {
    return new Date();
  }

  onSortChange(sortOptions: SortOptions): void {
    this.cartService.onSortChange(sortOptions);
  }
}