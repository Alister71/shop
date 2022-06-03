import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {CartService} from '../../components/cart/service/cart.service';
import {CartObservableService} from '../../components/cart/service/cart-observable.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private cartService: CartService, private cartObservableService: CartObservableService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.cartObservableService.isNotEmpty();
  }
}
