import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeaderComponent } from './ui-header.component';
import { FormsModule } from '@angular/forms';

describe('UiHeaderComponent', () => {
  let component: UiHeaderComponent;
  let fixture: ComponentFixture<UiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHeaderComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit emitElementSelected when sendElementSelected is called', () => {
    const EMIT_SPY = spyOn(component.emitElementSelected, "emit");
    const LINK_SELECTED = {
      name: "test",
      route: "test",
      type: undefined
    };
    component.sendElementSelected(LINK_SELECTED);
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
