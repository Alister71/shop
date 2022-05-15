import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {ProductResolveGuard} from './guards/product-resolve.resolver';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'products-list/:productID',
    component: ProductViewComponent,
    resolve: {
      product: ProductResolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
