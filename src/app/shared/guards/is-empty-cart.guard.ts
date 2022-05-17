import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {CartService} from '../../components/cart/service/cart.service';

@Injectable({providedIn: 'root'})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.cartService.isEmptyCart()) {
      return true;
    }

    return this.router.parseUrl('/products-list');
  }
}
// У вас есть две папки с guards
// core/guards
// shared/guards

