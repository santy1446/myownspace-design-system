import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNoteComponent } from './ui-note/ui-note.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UiNoteComponent]
})
export class UiNoteModule { }
