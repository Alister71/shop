import {Injectable} from '@angular/core';
import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../model/product';

const productArray =  [
  new Product(1, 'tea', 'description1', 5, CategoryEnum.FOOD, true),
  new Product(2, 'map', 'description2', 120, CategoryEnum.BOOKS, false),
  new Product(3, 'phone', 'description3', 1200, CategoryEnum.ELECTRONICS, true)
];

const productArrayPromise = Promise.resolve(productArray);

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Promise<Product[]> {
    return productArrayPromise;
  }
}
