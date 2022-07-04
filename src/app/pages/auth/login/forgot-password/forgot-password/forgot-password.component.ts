import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder
  ) { }
  showConfirmPassword: boolean = false;
  showNewPassword: boolean = false;
  invalidEmail: boolean = false;;
  public forgotPasswordForm!: FormGroup;
  public forgotPasswordByEmailForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  ngOnInit(): void {
    this.initialForm();
  }
  initialForm():void {
    this.forgotPasswordForm = this.fb.group({
      newPassword: [''],
      confirmPassword: ['']
    });
    this.forgotPasswordByEmailForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }
  toggleNewPassWord():void {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPassWord():void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  submitForm():void {
    console.log(this.forgotPasswordForm.value);
  }
  submitFormByEmail():void {
    console.log(this.forgotPasswordByEmailForm.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkEmail(e: any):void {
    this.forgotPasswordByEmailForm.get('email')?.setValue(e.target.value);
    if (!this.forgotPasswordByEmailForm.get('email')?.value) {
      this.invalidEmail = false;
    } else {
      // eslint-disable-next-line max-len
      if (this.forgotPasswordByEmailForm.get('email')?.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.invalidEmail = false;
      } else {
        this.invalidEmail = true;
      }
    }
    console.log(this.invalidEmail);
  }
}
