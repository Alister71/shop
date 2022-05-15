import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import {OrderRoutingModule} from './order-routing.module';



@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
