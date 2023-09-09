import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoaderComponent } from './ui-loader/ui-loader.component';



@NgModule({
  declarations: [
    UiLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UiLoaderComponent]
})
export class UiLoaderModule { }
