import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContactCardComponent } from './ui-contact-card.component';

describe('UiContactCardComponent', () => {
  let component: UiContactCardComponent;
  let fixture: ComponentFixture<UiContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
