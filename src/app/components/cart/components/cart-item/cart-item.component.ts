import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../../model/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [`
    :host.headingClass {
      border: 2px solid red;
      display: block;
      padding: 10px;
    }
  `],
})
export class CartItemComponent {
  @Input()
  cartItem: CartItem;

  @Output()
  quantityIncrease: EventEmitter<CartItem> = new EventEmitter();
  @Output()
  quantityDecrease: EventEmitter<CartItem> = new EventEmitter();
  @Output()
  deleteItem: EventEmitter<CartItem> = new EventEmitter();

  onQuantityIncrease(cartItem: CartItem): void {
    this.quantityIncrease.emit(cartItem);
  }

  onQuantityDecrease(cartItem: CartItem): void {
    this.quantityDecrease.emit(cartItem);
  }

  onDeleteItem(cartItem: CartItem): void {
    this.deleteItem.emit(cartItem);
  }
}
