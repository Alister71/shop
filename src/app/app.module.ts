import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import {CartModule} from './components/cart/cart.module';
import {OrdersModule} from './components/orders/orders.module';
import {ProductsModule} from './components/products/products.module';
import {SharedModule} from './components/shared/shared.module';
import {ChangeSizeDirective} from './shared/directives/change-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChangeSizeDirective
  ],
  imports: [
    BrowserModule,
    CartModule,
    SharedModule,
    OrdersModule,
    ProductsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
