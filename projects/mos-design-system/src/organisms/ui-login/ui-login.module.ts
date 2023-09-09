import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginComponent } from './ui-login/ui-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UiLoginComponent
  ]
})
export class UiLoginModule { }
