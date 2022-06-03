import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import type { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Product} from '../model/product';
import {EMPTY,  Observable, of, switchMap} from 'rxjs';
import {ProductsPromiseService} from '../service/products-promise.service';
@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsPromiseService: ProductsPromiseService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    console.log('ProductResolve Guard is called');
    if (!route.paramMap.has('productID')) {
      return of(new Product(null, '', '', 0, null, null, null));
    }
    // tslint:disable-next-line:no-non-null-assertion
    const id = route.paramMap.get('productID')!;
    console.log(id );
    return this.productsPromiseService.getProductObs(id).pipe(
      switchMap((product: Product) => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/products-list']);
          return EMPTY;
        }
      })
    );
  }
}
