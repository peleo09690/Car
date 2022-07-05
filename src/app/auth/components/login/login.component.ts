import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

export interface UserLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loggin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm!: FormGroup;
  public user: object | undefined;
  public constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }
  public ngOnInit(): void {
    this.initialForm();
  }
  private initialForm(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
  public togglePassWord(): void {
    this.showPassword = !this.showPassword;
  }
  public submitForm(): void {
    const data: UserLogin = this.loginForm.value;
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.loginService.userLogin(data).subscribe((x: any) => {
      localStorage.setItem('id_token', x?.access_token);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // this.loginService.getDetailUserLogin().subscribe((x: any) => {
      //   console.log(x);
      //   // let userDetail = {

      //   // };
      //   // localStorage.setItem('user');
      // });
      this.router.navigate(['user']);
    });
  }
}
