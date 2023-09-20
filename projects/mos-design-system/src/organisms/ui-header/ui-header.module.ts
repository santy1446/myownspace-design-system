import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderComponent } from './ui-header/ui-header.component';



@NgModule({
  declarations: [
    UiHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UiHeaderComponent]
})
export class UiHeaderModule { }
