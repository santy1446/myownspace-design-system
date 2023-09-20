import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mos-ui-note',
  templateUrl: './ui-note.component.html',
  styleUrls: ['./ui-note.component.scss']
})
export class UiNoteComponent {
  @Input() noteData: NoteData = {} as any; 
  @Input() isEditing: boolean = false; 

  @Output() saveAction = new EventEmitter<NoteData>();
  @Output() deleteAction = new EventEmitter<NoteData | boolean>();


  onSave() {
    this.isEditing = false;
    this.saveAction.emit(this.noteData);
  }
  onDelete() {
    if (this.noteData.body && this.noteData.title) {
      this.deleteAction.emit(this.noteData);
    }else {
      this.deleteAction.emit(false);
    }
  }
}

export interface NoteData {
  id: string | undefined;
  title: string;
  body: string;
  edit?: boolean;
}
