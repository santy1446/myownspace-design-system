import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const PASSWORD_REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"

@Component({
  selector: 'mos-ui-login',
  templateUrl: './ui-login.component.html',
  styleUrls: ['./ui-login.component.scss']
})
export class UiLoginComponent {
  @Output() emitRegisterData = new EventEmitter<RegisterData>();
  @Output() emitLoginData = new EventEmitter<LoginData>();
  @Input() regexPassword: string = PASSWORD_REGEX; 
  singUpForm : FormGroup;
  singInForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.singUpForm = formBuilder.group({
      singUpEmail: ['', [Validators.required, Validators.email]],
      singUpPassword: ['', [Validators.required, Validators.pattern(this.regexPassword)]],
      singUpConfirmPassword: ['', [Validators.required, Validators.pattern(this.regexPassword)]],
    });

    this.singInForm = formBuilder.group({
      singInEmail: ['', [Validators.required, Validators.email]],
      singInPassword: ['', [Validators.required]],
    })
  }

  onSingUpSubmit() : void{
    if (this.singUpForm.valid) {
      this.emitRegisterData.emit(this.singUpForm.value);
    }
  }

  onSingInSubmit() : void{
    if (this.singInForm.valid) {
      this.emitLoginData.emit(this.singInForm.value);
    }
  }

  isInvalidFormField(controlName : string, isLogin : boolean): boolean {
    const controlField = isLogin ? this.singInForm.controls[controlName] : this.singUpForm.controls[controlName]; 
    return controlField.invalid && controlField.dirty || controlField.touched && controlField.invalid
  }

  isConfirmPasswordInvalid(): boolean {
    const controlField = this.singUpForm.controls["singUpConfirmPassword"]; 
    const matchPassword = controlField.value === 
    this.singUpForm.controls["singUpPassword"].value; 
    return !matchPassword && controlField.dirty || controlField.touched && !matchPassword;
  }

}

export interface RegisterData  {
  singUpEmail: string;
  singUpPassword: string;
  singUpConfirmPassword: string;
}

export interface LoginData  {
  singInEmail: string;
  singInPassword: string;
}
