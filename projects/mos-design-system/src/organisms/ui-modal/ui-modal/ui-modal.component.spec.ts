import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalComponent } from './ui-modal.component';

describe('UiModalComponent', () => {
  let component: UiModalComponent;
  let fixture: ComponentFixture<UiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isModalVisible should be true when openModal is called', () => {
    component.openModal();
    expect(component.isModalVisible).toBeTruthy();
  });

  it('isModalVisible should be false when closeModal is called', () => {
    component.closeModal();
    expect(component.isModalVisible).toBeFalsy();
  });

  it('should emit emitAcceptButton when acceptClickButton is called', () => {
    const EMIT_SPY = spyOn(component.emitAcceptButton, "emit");
    component.acceptClickButton();
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
