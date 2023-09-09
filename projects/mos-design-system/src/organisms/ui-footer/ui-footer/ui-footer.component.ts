import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mos-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss']
})
export class UiFooterComponent {
  @Input() generalLinks : generalLinks[] = [];
  @Input() contactInfo : contactInfo = {title: "", buttons: []};
  @Output() emitLinkSelected = new EventEmitter<generalLinksInfo>();
  @Output() emitIconSelected = new EventEmitter<contactInfoButtons>();
  
  sendLinkSelected (link : generalLinksInfo): void {
    this.emitLinkSelected.emit(link);
  }

  sendIconSelected (icon : contactInfoButtons) : void {
    this.emitIconSelected.emit(icon);
  }

}

export interface generalLinks {
  categoryName: string;
  categoryLinks: generalLinksInfo[];
};

export interface generalLinksInfo {
  name: string;
  route: string;
  type: string | undefined;
};

export interface contactInfo {
  title: string;
  buttons: contactInfoButtons[];
};

export interface contactInfoButtons {
  name: string;
  icon: string; //CloudFlare
  type: string | undefined;
}
