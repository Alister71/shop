import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import type { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Product} from '../model/product';
import {ProductsService} from '../service/products.service';
import {EMPTY,  Observable, of, switchMap} from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productArrayService: ProductsService,
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
    return this.productArrayService.getProductObs(id).pipe(
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
