import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainDatepickerComponent } from './main-datepicker/main-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDatepickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
