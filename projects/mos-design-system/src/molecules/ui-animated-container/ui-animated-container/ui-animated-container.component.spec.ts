import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAnimatedContainerComponent } from './ui-animated-container.component';

describe('UiAnimatedContainerComponent', () => {
  let component: UiAnimatedContainerComponent;
  let fixture: ComponentFixture<UiAnimatedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAnimatedContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAnimatedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
