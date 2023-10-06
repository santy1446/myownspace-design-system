import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiContactCardComponent } from './ui-contact-card/ui-contact-card.component';



@NgModule({
  declarations: [
    UiContactCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiContactCardComponent
  ]
})
export class UiContactCardModule { }
