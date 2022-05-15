import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {AdminProductsComponent} from './components/admin-products/admin-products.component';
import {AdminProductCreateComponent} from './components/admin-product-create/admin-product-create.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AdminProductEditComponent} from './components/admin-product-edit/admin-product-edit.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {ProductResolveGuard} from '../components/products/guards/product-resolve.resolver';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {path: 'products', component: AdminProductsComponent},
          {path: 'product/add', component: AdminProductCreateComponent},
          {
            path: 'product/edit/:productID',
            component: AdminProductEditComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          {path: 'dashboard', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminProductsComponent,
    AdminProductCreateComponent,
    AdminProductEditComponent,
    AdminDashboardComponent
  ];
}
