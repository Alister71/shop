import {NgModule} from '@angular/core';
import {FirstComponent} from './first/first.component';
import {CartModule} from './cart/cart.module';
import {OrdersModule} from './orders/orders.module';
import {ProductsModule} from './products/products.module';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {CartListComponent} from './cart/cart-list/cart-list.component';

@NgModule({
  declarations: [
    FirstComponent,
    PathNotFoundComponent
  ],
  imports: [
    CartModule,
    OrdersModule,
    ProductsModule
  ],
  exports: [
    FirstComponent,
    ProductListComponent,
    CartListComponent
  ]
})
export class ComponentsModule {

}
