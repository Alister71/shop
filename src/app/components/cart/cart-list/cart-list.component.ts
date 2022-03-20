import {Component, OnInit} from '@angular/core';
import {CartService} from '../service/cart.service';
import {Cart} from '../model/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  carts: Array<Cart>;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.carts = this.cartService.getCarts();
  }

  cartNotEmpty(): boolean {
    return this.carts.length > 0;
  }

  trackByItems(index: number, item: Cart): string { return item.name; }

  onClearCart(): void {
    this.carts.length = 0;
  }
}
