import {OrderByPipe} from './pipes/order-by.pipe';
import {NgModule} from '@angular/core';
import {HighlightDirective} from './directives/highlight.directive';
import {ChangeSizeDirective} from './directives/change-size.directive';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OrderByPipe,
    HighlightDirective,
    ChangeSizeDirective
  ],
  imports: [
  ],
  exports: [
    OrderByPipe,
    HighlightDirective,
    ChangeSizeDirective,
    CommonModule,
    FormsModule
  ],
  providers: [
    OrderByPipe,
  ],
})
export class SharedModule {
}
