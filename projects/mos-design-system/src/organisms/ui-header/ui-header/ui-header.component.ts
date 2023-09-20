import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'mos-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {
  @Input() links: Links[] = [];
  @Output() emitElementSelected = new EventEmitter<Links>();

  toggleCheck: boolean = false;

  /**
   * Send to the client the option selected
   * @param elm element selected
   */
  sendElementSelected(elm : Links) : void {
    this.toggleCheck = false
    this.emitElementSelected.emit(elm);
  }

}

export interface Links {
  name: string;
  route: string;
  type: string | undefined;
}
