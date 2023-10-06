import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProfileImageUploadComponent } from './ui-profile-image-upload/ui-profile-image-upload.component';



@NgModule({
  declarations: [
    UiProfileImageUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiProfileImageUploadComponent
  ]
})
export class UiProfileImageUploadModule { }
