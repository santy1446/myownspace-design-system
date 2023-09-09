import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAnimatedContainerComponent } from './ui-animated-container/ui-animated-container.component';



@NgModule({
  declarations: [
    UiAnimatedContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UiAnimatedContainerComponent]
})
export class UiAnimatedContainerModule { }
