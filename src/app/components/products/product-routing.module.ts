import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductViewComponent} from './components/product-view/product-view.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'products-list/:productID',
    component: ProductViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
