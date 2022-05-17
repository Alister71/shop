import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcessOrderComponent} from './components/process-order/process-order.component';
import {IsEmptyCartGuard} from '../../core/guards/is-empty-cart.guard';

const routes: Routes = [
  { path: 'process-order', component: ProcessOrderComponent, canActivate: [IsEmptyCartGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
