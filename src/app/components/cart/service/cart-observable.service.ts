import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpContextToken, HttpContext } from '@angular/common/http';
import {Observable, throwError, catchError, retry, share, firstValueFrom} from 'rxjs';
import type { HttpErrorResponse } from '@angular/common/http';
import {CartItem} from '../model/cartItem';
import {CartProductsAPI} from '../cart.config';
import {Product} from '../../products/model/product';
import {concatMap, count, defaultIfEmpty, map} from 'rxjs/operators';
import {Router} from '@angular/router';

export const interceptorTOKEN = new HttpContextToken(() => 0);

@Injectable({
  providedIn: 'any'
})
export class CartObservableService {

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(CartProductsAPI) private cartsUrl: string
  ) {
  }

/*
  get totalCost(): number {
    return this.getCartProducts().reduce((sum: number, current: CartItem) => sum + current.price * current.quantity, 0);
  }
*/
  get totalQuantity(): Observable<number> {
    return this.getCartProducts().pipe(count());
  }


  getCartProducts(): Observable<CartItem[]> {
    const httpOptions = {
      context: new HttpContext().set(interceptorTOKEN,  new Date().getTime())
    };
    return this.http.get<CartItem[]>(this.cartsUrl, httpOptions).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  /*
  getCartProduct(id: NonNullable<CartItem['id']> | string): Observable<CartItem> {
    const url = '${this.cartsUrl}/${id}';
    return this.http.get<CartItem>(url)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }
*/
  updateCartProduct(item: CartItem): Observable<CartItem> {
    const httpOptions = {
      context: new HttpContext().set(interceptorTOKEN,  new Date().getTime())
    };
    const url = `${this.cartsUrl}/${item.id}`;
    return this.http
      .put<CartItem>(url, item, httpOptions)
      .pipe( catchError(this.handleError) );
  }

  createCartProduct(item: CartItem): Observable<CartItem> {
    const httpOptions = {
      context: new HttpContext().set(interceptorTOKEN,  new Date().getTime())
    };
    const url = this.cartsUrl;
    return this.http
      .post<CartItem>(url, item, httpOptions)
      .pipe(
        catchError( this.handleError )
      );
  }


  deleteCartProduct(cart: CartItem): Observable<CartItem[]> {
    const httpOptions = {
      context: new HttpContext().set(interceptorTOKEN,  new Date().getTime())
    };
    const url = `${this.cartsUrl}/${cart.id}`;
    return this.http.delete(url, httpOptions).pipe(
      concatMap(() => this.getCartProducts()),
      catchError(this.handleError)
    );
  }

  deleteCartItem(cart: CartItem): Observable<any>  {
    const url = `${this.cartsUrl}/${cart.id}`;
    return this.http
      .delete(url);
  }

  isNotEmpty(): Observable<boolean> {
    const countVal = this.getCartProducts().pipe(count());
    return  countVal.pipe(
      map(countVar => countVar > 0),
      defaultIfEmpty(false)
    );
  }


  // tslint:disable-next-line:typedef
  async onAddToCart(product: Product) {
    console.log('Product was bought!', product);
    const observer = {
      next: (item: CartItem) => {
        this.router.navigate(['cart']);
      },
      error: (err: any) => console.log(err)
    };
    const items = await firstValueFrom(this.getCartProducts());
    const cartItem = items.find(t => t.id === product.id);

    if (cartItem) {
      if (product.id !== cartItem.id) {
        throw new Error('Invalid product');
      }
      cartItem.totalPrice += cartItem.price;
      cartItem.quantity++;
      this.updateCartProduct(cartItem).subscribe(observer);
      return;
    }

    this.createCartProduct(CartItem.addCartItemByProduct(product)).subscribe(observer);
    console.log('product was added to cart ' + CartItem.addCartItemByProduct(product));
  }




  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
// A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
// The backend returned an unsuccessful response code.
// The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
// Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
