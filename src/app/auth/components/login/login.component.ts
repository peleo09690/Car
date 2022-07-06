import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModelResponse, UserLogin } from '@auth/models';
import { LoginService } from '@auth/services/login.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup({});
  public user!: LoginModelResponse;

  public constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initialForm();
  }


  public togglePassWord(): void {
    this.showPassword = !this.showPassword;
  }
  public submitForm(): void {
    const data: UserLogin = this.loginForm.value;

    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.userLogin(data).subscribe((res: LoginModelResponse) => {
      if (res) {
        sessionStorage.setItem('id_token', res.access_token);
        this.loginService.isLoginAsync$.next(true);
        this.router.navigate(['/user']);
      }
    });
  }

  private initialForm(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
}
