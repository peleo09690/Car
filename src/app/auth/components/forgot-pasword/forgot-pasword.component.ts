import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
  public showConfirmPassword: boolean = false;
  public showNewPassword: boolean = false;
  public invalidEmail: boolean = false;;
  public forgotPasswordByEmailForm: FormGroup = new FormGroup({});

  public constructor(
    private fb: FormBuilder
  ) { }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public ngOnInit(): void {
    this.initialForm();
  }
  private initialForm(): void {
    this.forgotPasswordByEmailForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }
  public toggleNewPassWord(): void {
    this.showNewPassword = !this.showNewPassword;
  }
  public toggleConfirmPassWord(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  public submitFormByEmail(): void {
    if (!this.forgotPasswordByEmailForm.get('username')?.value || !this.forgotPasswordByEmailForm.get('email')?.value) {
      alert("username or email not null");
      return;
    }
  }
}
