import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PathNotFoundComponent} from './components/path-not-found/path-not-found.component';
import {LoginComponent} from './components/login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
