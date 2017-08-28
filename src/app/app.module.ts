import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericInputValidationDirective } from './directive/numeric-input-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumericInputValidationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
