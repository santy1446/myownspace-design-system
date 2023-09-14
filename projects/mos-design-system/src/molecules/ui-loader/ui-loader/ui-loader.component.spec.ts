import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoaderComponent } from './ui-loader.component';

describe('UiLoaderComponent', () => {
  let component: UiLoaderComponent;
  let fixture: ComponentFixture<UiLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLoaderVisible should be true when showLoader is called', () => {
    component.showLoader();
    expect(component.isLoaderVisible).toBeTruthy();
  });

  it('isLoaderVisible should be false when hideLoader is called', () => {
    component.hideLoader();
    expect(component.isLoaderVisible).toBeFalsy();
  });
});
