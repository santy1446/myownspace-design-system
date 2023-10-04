import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mos-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss']
})
export class UiModalComponent {
  @Input() modalId: string = "";
  @Input() showButtons: boolean = true;
  @Input() primaryButtonText: string = "Aceptar";
  @Input() secondaryButtonText: string = "Cancelar";
  @Input() titleText: string = "Title";
  @Input() size: "spm" | "sm" | "md" | "lg" = "spm";
  @Output() emitAcceptButton = new EventEmitter<boolean>();

  isModalVisible : boolean = false;

  /**
   * Open mos Modal
   */
  openModal(): void { this.isModalVisible = true; }

  /**
   * Close mos Modal
   */
  closeModal(): void { this.isModalVisible = false; }

  /**
   * Accept button event
   */
  acceptClickButton(): void { this.emitAcceptButton.emit(true) ;}

}
