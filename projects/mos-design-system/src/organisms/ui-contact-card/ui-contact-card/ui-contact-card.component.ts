import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mos-ui-contact-card',
  templateUrl: './ui-contact-card.component.html',
  styleUrls: ['./ui-contact-card.component.scss']
})
export class UiContactCardComponent {

  @Input() contactInfo : ContactData;
  @Output() emitAction = new EventEmitter<ContactDataAction>();

  onEmitAction(action: "edit" | "delete", contact: ContactData) {
    const DATA_TO_SEND : ContactDataAction = {
      action: action,
      data: contact
    };
    this.emitAction.emit(DATA_TO_SEND);
  }
}

export interface ContactData {
  id?: string;
  img: string;
  job: string;
  name: string;
  phone: string;
  email: string;
}

export interface ContactDataAction {
  action: "edit" | "delete";
  data: ContactData
}
