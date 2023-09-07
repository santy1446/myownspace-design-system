import { Component, Input } from '@angular/core';

@Component({
  selector: 'mos-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {
  @Input() links: Links[] = [];

}

export interface Links {
  name: string;
  route: string;
  type: string | undefined;
}
