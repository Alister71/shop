import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {OrderByPipe} from './shared/pipes/order-by.pipe';
import {SharedModule} from './shared/shared.modules';
import {ComponentsModule} from './components/components.module';
import { Router } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import {LocalStorageService, StorageService} from './core/services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidatorsModule } from './validators/validators.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    NoopAnimationsModule,
    AdminModule,
    AppRoutingModule,
    ValidatorsModule
  ],
  providers: [
    OrderByPipe,
    {provide: LocalStorageService, useValue: new StorageService(window.localStorage)},
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
