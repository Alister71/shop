import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom, from, Observable} from 'rxjs';
import {Product} from '../model/product';


@Injectable({
  providedIn: 'any'
})
export class ProductsPromiseService {
  private productssUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProducts(): Promise<Product[]> {
    const request$ = this.http.get(this.productssUrl);
    return firstValueFrom(request$)
      .then(response => response as Product[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProduct(id: NonNullable<Product['id']> | string): Promise<Product> {
    const url = `${this.productssUrl}/${id}`;
    const request$ = this.http.get(url);
    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  getProductObs(id: NonNullable<Product['id']> | string ): Observable<Product | undefined> {
    return from(this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method')));
  }

  updateTask(product: Product): Promise<Product> {
    const url = `${this.productssUrl}/${product.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const request$ = this.http.put(url, product, options);
    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  createTask(product: Product): Promise<Product> {
    const url = this.productssUrl;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const request$ = this.http.post(url, product, options);
    return firstValueFrom(request$)
      .then(response => response as Product)
      .catch(this.handleError);
  }

  deleteTask(product: Product): Promise<unknown> {
    const url = `${product.id}`;
    const request$ = this.http.delete(url);
    return firstValueFrom(request$)
      // json-server return empty object
      // so we don't use .then(...)
      .catch(this.handleError);
  }
}
