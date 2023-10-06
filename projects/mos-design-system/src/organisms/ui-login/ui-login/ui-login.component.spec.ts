import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoginComponent } from './ui-login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UiLoginComponent', () => {
  let component: UiLoginComponent;
  let fixture: ComponentFixture<UiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.singUpForm.setValue({
      singUpUser: "UserExample",
      singUpEmail: "example@gmail.com",
      singUpPassword: "ExamplePassword$123",
      singUpConfirmPassword: "ExamplePassword$123",
    });

    component.singInForm.setValue({
      singInEmail: "example@gmail.com",
      singInPassword: "ExamplePassword$123",
    });
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit emitRegisterData when onSingUpSubmit is called', () => {
    const EMIT_SPY = spyOn(component.emitRegisterData, "emit");
    component.onSingUpSubmit();
    expect(EMIT_SPY).toHaveBeenCalled();
  });

  it('should emit emitLoginData when onSingInSubmit is called', () => {
    const EMIT_SPY = spyOn(component.emitLoginData, "emit");
    component.onSingInSubmit();
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
