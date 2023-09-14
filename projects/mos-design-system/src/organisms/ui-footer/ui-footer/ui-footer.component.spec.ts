import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFooterComponent } from './ui-footer.component';

describe('UiFooterComponent', () => {
  let component: UiFooterComponent;
  let fixture: ComponentFixture<UiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit emitLinkSelected when sendLinkSelected is called', () => {
    const EMIT_SPY = spyOn(component.emitLinkSelected, "emit");
    const LINK_SELECTED_INFO = {
      name: "test",
      route: "test",
      type: undefined
    };
    component.sendLinkSelected(LINK_SELECTED_INFO);
    expect(EMIT_SPY).toHaveBeenCalled();
  });

  it('should emit emitIconSelected when sendIconSelected is called', () => {
    const EMIT_SPY = spyOn(component.emitIconSelected, "emit");
    const ICON_SELECTED_INFO = {
      name: "test",
      icon: "test",
      type: undefined
    };
    component.sendIconSelected(ICON_SELECTED_INFO);
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
