import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToastComponent } from './ui-toast/ui-toast.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiToastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UiToastComponent
  ]
})
export class UiToastModule { }
