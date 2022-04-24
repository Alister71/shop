import {Pipe, PipeTransform} from '@angular/core';
import {CartItem} from '../../components/cart/model/cartItem';
import {SortOptions} from '../models/sort-options';

@Pipe({name: 'order'})
export class OrderByPipe implements PipeTransform {

    transform(cartItems: CartItem[], sortOptions: SortOptions): CartItem[] {
      if (cartItems.length === 0) {
       return cartItems;
      }
      if (!sortOptions.key) {
        return cartItems;
      }
      if (!sortOptions.direction) {
        return cartItems;
      }
      return cartItems.sort((a: CartItem, b: CartItem) => {
        const fieldA = a[sortOptions.key];
        const fieldB = b[sortOptions.key];
        if (typeof(fieldA) === 'string') {
          return sortOptions.direction === 'asc'
            ? fieldA.localeCompare(fieldB)
            : fieldB.localeCompare(fieldA);
        }
        else {
          return sortOptions.direction === 'asc'
            ? fieldA - fieldB
            : fieldB - fieldA;
        }
      });
    }
}
