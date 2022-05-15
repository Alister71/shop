import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SortItemsComponent } from './components/sort-items/sort-items.component';
import {SharedModule} from '../../shared/shared.modules';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CartRoutingModule} from './cart-routing.module';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
    SortItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    CartRoutingModule,
  ],
  exports: [
    CartListComponent
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}]
})
export class CartModule { }
