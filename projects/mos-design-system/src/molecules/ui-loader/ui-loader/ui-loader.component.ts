import { Component } from '@angular/core';

@Component({
  selector: 'mos-ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss']
})
export class UiLoaderComponent {
  isLoaderVisible : boolean = false;

  showLoader(): void {this.isLoaderVisible = true}
  hideLoader(): void {this.isLoaderVisible = false}

}
