import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputDirective } from './ui-input-durective/ui-input.directive';



@NgModule({
  declarations: [
    UiInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[UiInputDirective]
})
export class UiInputModule { }
