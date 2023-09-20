import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteData, UiNoteComponent } from './ui-note.component';
import { FormsModule } from '@angular/forms';

const NOTE_DATA_MOCK: NoteData = {
  id: 'qwe123',
  title: 'Note title',
  body: 'This is a note body'
}

describe('UiNoteComponent', () => {
  let component: UiNoteComponent;
  let fixture: ComponentFixture<UiNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNoteComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isEditing should be false and saveAction should emit when onSave is called', () => {
    const EMIT_SPY = spyOn(component.saveAction, "emit");
    component.noteData = NOTE_DATA_MOCK;
    component.onSave();
    expect(component.isEditing).toBeFalsy();
    expect(EMIT_SPY).toHaveBeenCalled();
  });

  it('isEditing should be false and saveAction should emit when onSave is called', () => {
    const EMIT_SPY = spyOn(component.saveAction, "emit");
    component.noteData = NOTE_DATA_MOCK;
    component.onSave();
    expect(component.isEditing).toBeFalsy();
    expect(EMIT_SPY).toHaveBeenCalled();
  });

  it('should emit if data is filed when onDelete is called', () => {
    const EMIT_SPY = spyOn(component.deleteAction, "emit");
    component.noteData = NOTE_DATA_MOCK;
    component.onDelete();
    expect(EMIT_SPY).toHaveBeenCalled();
  });

  it('should emit if data is filed when onDelete is called', () => {
    const EMIT_SPY = spyOn(component.deleteAction, "emit");
    component.noteData = NOTE_DATA_MOCK;
    component.noteData.body = "";
    component.noteData.title = "";
    component.onDelete();
    expect(EMIT_SPY).toHaveBeenCalled();
  });


});
