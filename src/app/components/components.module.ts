import {NgModule} from '@angular/core';
import {FirstComponent} from './first/first.component';
import {CartModule} from './cart/cart.module';
import {OrdersModule} from './orders/orders.module';
import {ProductModule} from './products/product.module';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {CartListComponent} from './cart/components/cart-list/cart-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FirstComponent,
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CartModule,
    OrdersModule,
    ProductModule
  ],
  exports: [
    FirstComponent,
    ProductListComponent,
    CartListComponent,
    LoginComponent
  ]
})
export class ComponentsModule {

}
