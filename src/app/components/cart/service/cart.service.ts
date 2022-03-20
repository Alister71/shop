import { Injectable } from '@angular/core';
import {CategoryEnum} from '../../first/category.enum';
import {Cart} from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCarts(): Array<Cart> {
    return [
      new Cart('ball', 'description1', 10, CategoryEnum.TOYS),
      new Cart('paper', 'description2', 11, CategoryEnum.BOOKS),
      new Cart('powerbank', 'description3', 150, CategoryEnum.ELECTRONICS)
    ];
  }
}
