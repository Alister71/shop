import {Injectable} from '@angular/core';
import {CategoryEnum} from '../../first/category.enum';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productArray: Product[] =  [
    new Product('tea', 'description1', 5, CategoryEnum.FOOD, true),
    new Product('map', 'description2', 120, CategoryEnum.BOOKS, false),
    new Product('phone', 'description3', 1200, CategoryEnum.ELECTRONICS, true)
  ];

  private products: Promise<Product>[]  =  this.productArray.map((product) => {
    return new Promise<Product>((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 500);
    });
  });



  getProducts(): Promise<Product[]> {
    return Promise.all(this.products) ;
  }
}
