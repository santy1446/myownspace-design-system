import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiButtonModule } from '../../public-api';



@NgModule({
  declarations: [
    UiModalComponent
  ],
  imports: [
    CommonModule,
    UiButtonModule
  ],
  exports: [UiModalComponent]
})
export class UiModalModule { }
