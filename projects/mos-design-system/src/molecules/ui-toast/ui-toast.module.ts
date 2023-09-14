import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToastComponent } from './ui-toast/ui-toast.component';



@NgModule({
  declarations: [
    UiToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiToastComponent
  ]
})
export class UiToastModule { }
