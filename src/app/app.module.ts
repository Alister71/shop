import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import {CartModule} from './components/cart/cart.module';
import {OrdersModule} from './components/orders/orders.module';
import {ProductsModule} from './components/products/products.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {OrderByPipe} from './shared/pipes/order-by.pipe';
import {SharedModule} from './shared/shared.modules';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    SharedModule,
    OrdersModule,
    ProductsModule,
    NoopAnimationsModule
  ],
  providers: [
    OrderByPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
