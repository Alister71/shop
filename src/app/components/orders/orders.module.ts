import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import {OrderRoutingModule} from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
