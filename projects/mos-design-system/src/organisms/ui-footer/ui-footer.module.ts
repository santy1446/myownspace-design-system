import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFooterComponent } from './ui-footer/ui-footer.component';



@NgModule({
  declarations: [
    UiFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UiFooterComponent]
})
export class UiFooterModule { }
