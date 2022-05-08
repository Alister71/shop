import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductRoutingModule} from './product-routing.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    MatCardModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
