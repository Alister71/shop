import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import {CartListComponent} from './cart-list/cart-list.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SortItemsComponent } from './sort-items/sort-items.component';
import {SharedModule} from '../../shared/shared.modules';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
    SortItemsComponent
  ],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CartListComponent
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}]
})
export class CartModule { }
