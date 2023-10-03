import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  UiAnimatedContainerModule,
  UiButtonModule,
  UiFooterModule,
  UiHeaderModule,
  UiInputModule, 
  UiModalModule,
  UiLoginModule,
  UiLoaderModule,
  UiToastModule,
  UiNoteModule,
  UiTableModule,
  UiContactCardModule
} from 'projects/mos-design-system/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiButtonModule,
    UiInputModule,
    UiHeaderModule,
    UiFooterModule,
    UiAnimatedContainerModule,
    UiModalModule,
    UiLoginModule,
    UiLoaderModule,
    UiToastModule,
    UiNoteModule,
    UiTableModule,
    UiContactCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
