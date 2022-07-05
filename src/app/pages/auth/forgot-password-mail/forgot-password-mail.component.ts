import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password-mail',
  templateUrl: './forgot-password-mail.component.html',
  styleUrls: ['./forgot-password-mail.component.scss']
})
export class ForgotPasswordMailComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }
  showConfirmPassword: boolean = false;
  showNewPassword: boolean = false;
  invalidEmail: boolean = false;;
  public forgotPasswordByEmailForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  ngOnInit(): void {
    this.initialForm();
  }
  initialForm(): void {
    this.forgotPasswordByEmailForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }
  toggleNewPassWord(): void {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPassWord(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkEmail(e: any): void {
    this.forgotPasswordByEmailForm.get('email')?.setValue(e.target.value);
    if (!this.forgotPasswordByEmailForm.get('email')?.value) {
      this.invalidEmail = false;
    } else {
      if (
        // eslint-disable-next-line max-len
        this.forgotPasswordByEmailForm.get('email')?.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        this.invalidEmail = false;
      } else {
        this.invalidEmail = true;
      }
    }
  }
  submitFormByEmail(): void {
    if (!this.forgotPasswordByEmailForm.get('username')?.value || !this.forgotPasswordByEmailForm.get('email')?.value) {
      alert("username or email not null");
      return;
    }
    console.log(this.forgotPasswordByEmailForm.value);
  }
  goBack(): void {
    // window.history.back();
    this.location.back();
  }
}
