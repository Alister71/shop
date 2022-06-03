import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {CartItem} from '../../model/cartItem';
import {SortOptions} from '../../../../shared/models/sort-options';
import { Router } from '@angular/router';
import {CartObservableService} from '../../service/cart-observable.service';
import {Observable} from 'rxjs';
import {concatAll, map, mergeMap} from 'rxjs/operators';
import {AutoUnsubscribe} from '../../../../core/decorators/auto-unsubscribe.decorator';
import {Location} from '@angular/common';
import {OrderByPipe} from '../../../../shared/pipes/order-by.pipe';
import {AppSettingsService} from '../../../../core/services/app-settings.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
@AutoUnsubscribe()
export class CartListComponent implements OnInit {
  sortOptions!: SortOptions;
  cartProducts$: Observable<Array<CartItem>>;
  totalC: number;

  constructor(private cartService: CartService,
              private cartObservableService: CartObservableService,
              private location: Location,
              private router: Router,
              private orderByPipe: OrderByPipe,
              private appSettingsService: AppSettingsService
  ) {
  }

  ngOnInit(): void {
    this.sortOptions = this.appSettingsService.getSortOptions();
    this.cartProducts$ = this.getSortChange(this.sortOptions);
  }

  totalCost(items: CartItem[]): number {
    return items?.reduce((sum: number, current: CartItem) => sum + current.price * current.quantity, 0);
  }

  totalQuantity(items: CartItem[]): number {
    return items?.reduce((sum: number, current: CartItem) => sum + current.quantity, 0);
  }

  trackByItems(index: number, item: CartItem): number | null { return item.id; }

  onClearCart(): void {
    const observer = {
      next: items => {
        this.cartProducts$ = this.cartObservableService.getCartProducts();
        location.reload();
      },
      error: (err: any) => console.log(err)
    };

    const subscription = this.cartProducts$.pipe(mergeMap(items => items.map((item) =>
      this.cartObservableService.deleteCartItem(item))),
      concatAll())
      .subscribe(observer);
  }

  onQuantityIncrease(cartItem: CartItem): void {
    const observer = {
      error: (err: any) => console.log(err)
    };
    cartItem.totalPrice += cartItem.price;
    cartItem.quantity++;
    this.cartObservableService.updateCartProduct(cartItem).subscribe(observer);
  }

  onQuantityDecrease(cartItem: CartItem): void {
    const observer = {
      error: (err: any) => console.log(err)
    };
    cartItem.totalPrice -= cartItem.price;
    cartItem.quantity--;
    this.cartObservableService.updateCartProduct(cartItem).subscribe(observer);
  }

  onDeleteItem(cartItem: CartItem): void {
    this.cartProducts$ = this.cartObservableService.deleteCartProduct(cartItem);
  }

  lastChange(): Date {
    return new Date();
  }

  onSortChange(sortOptions: SortOptions): void {
    this.cartProducts$ = this.getSortChange(this.sortOptions);
  }

  getSortChange(sortOptions: SortOptions): Observable<CartItem[]> {
    return  this.cartObservableService.getCartProducts().pipe(
      map((preSortedProducts: CartItem[]) => this.orderByPipe.transform(preSortedProducts, sortOptions)));
  }


}
