import {Inject, Injectable} from '@angular/core';
import {CartItem} from '../model/cartItem';
import {Product} from '../../products/model/product';
import {SortOptions} from '../../../shared/models/sort-options';
import {OrderByPipe} from '../../../shared/pipes/order-by.pipe';
import {LocalStorageService, StorageService} from '../../../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartStorageKey = 'CartStorage';
  private cartProducts: Array<CartItem> = [];

  constructor(@Inject(LocalStorageService) private storage: StorageService,
              private orderByPipe: OrderByPipe) {
    if (!storage.isKeyExists(this.cartStorageKey)) {
      storage.set(this.cartStorageKey, []);
    }
    const stor = this.storage.get(this.cartStorageKey);
    if(stor && Array.isArray(stor)) {
      this.cartProducts = this.storage.get(this.cartStorageKey);
    }
    else {
      this.onChange();
    }
  }

  get getCartProducts(): Array<CartItem> {
    return this.cartProducts;
  }

  public addProductToCard(product: Product): void {
    const cartItem = this.cartProducts.find(x => x.id === product.id);
    if (cartItem) {
      if (product.id !== cartItem.id) {
        throw new Error('Invalid product');
      }
      cartItem.totalPrice += cartItem.price;
      cartItem.quantity++;
      this.cartProducts[this.cartProducts.findIndex(x => x.id === product.id)] = cartItem;
      this.onChange();
      return;
    }

    this.cartProducts.push(CartItem.addCartItemByProduct(product));
    this.onChange();
  }

  public addProduct(product: Product, productNumber = 1): void {
    for (let i = 0; i < productNumber; ++i) {
      this.cartProducts.push(CartItem.addCartItemByProduct(product));
    }
    this.onChange();
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

  onQuantityIncrease(cartItem: CartItem): void {
    const index = this.cartProducts.indexOf(cartItem, 0);
    if (index > -1) {
      cartItem.totalPrice += cartItem.price;
      cartItem.quantity++;
      this.cartProducts[index] = cartItem;
      this.onChange();
    }
  }

  onQuantityDecrease(cartItem: CartItem): void {
    const index = this.cartProducts.indexOf(cartItem, 0);
    if (index > -1 && cartItem.quantity > 1) {
      cartItem.totalPrice -= cartItem.price;
      cartItem.quantity--;
      this.cartProducts[index] = cartItem;
      this.onChange();
    }
  }

  removeAllProducts(): void {
    this.cartProducts.length = 0;
    this.onChange();
  }

  deleteItem(cartItem: CartItem): void {
    const index = this.cartProducts.indexOf(cartItem, 0);
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
    this.onChange();
  }

  onSortChange(sortOptions: SortOptions): void {
    this.cartProducts = this.orderByPipe.transform(this.cartProducts, sortOptions);
  }

  private onChange(): void {
    this.storage.set(this.cartStorageKey, this.cartProducts);
  }
}
