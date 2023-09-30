import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from './ui-table/ui-table.component';
import { FormsModule } from '@angular/forms';
import { UiButtonModule, UiInputModule } from '../../public-api';



@NgModule({
  declarations: [
    UiTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UiButtonModule,
    UiInputModule
  ],
  exports: [
    UiTableComponent,
  ]
})
export class UiTableModule { }
