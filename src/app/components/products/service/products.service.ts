import {Injectable} from '@angular/core';
import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProduct(): Product {
    return new Product('product1', 'description1', 12, CategoryEnum.FOOD, true);
  }

  getProducts(): Array<Product> {
    return [
      new Product('tea', 'description1', 5, CategoryEnum.FOOD, true),
      new Product('map', 'description2', 120, CategoryEnum.BOOKS, false),
      new Product('phone', 'description3', 1200, CategoryEnum.ELECTRONICS, true)
    ];
  }
}
