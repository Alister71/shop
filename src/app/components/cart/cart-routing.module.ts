import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CartListComponent} from './components/cart-list/cart-list.component';

const routes: Routes = [
  { path: 'cart', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
