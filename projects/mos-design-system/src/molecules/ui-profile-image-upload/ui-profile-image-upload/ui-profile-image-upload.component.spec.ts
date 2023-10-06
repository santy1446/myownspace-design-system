import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProfileImageUploadComponent } from './ui-profile-image-upload.component';

describe('UiProfileImageUploadComponent', () => {
  let component: UiProfileImageUploadComponent;
  let fixture: ComponentFixture<UiProfileImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProfileImageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProfileImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute updateImage when onFileSelected is called', () => {
    const mFile = new File(['go'], 'go.pdf');
    const mEvent = { target: { files: [mFile] } };
    const UPDATE_IMAGE_SPY = spyOn(component as any, "updateImage");

    component.onFileSelected(mEvent.target);
    setTimeout(() => {
      expect(UPDATE_IMAGE_SPY).toHaveBeenCalled();
    }, 500);
  });

});
