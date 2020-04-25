import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    BrowserModule
  ],
  exports: [DatePickerComponent]
})
export class CustomDatePickerModule { }
