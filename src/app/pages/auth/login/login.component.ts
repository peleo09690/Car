import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }
  showPassword: boolean = false;
  public loginForm!: FormGroup;
  user: object | undefined;
  ngOnInit(): void {
    this.initialForm();
  }
  initialForm(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  togglePassWord(): void {
    this.showPassword = !this.showPassword;
  }
  submitForm(): void {
    // this.loginService.userLogin(this.loginForm.value).subscribe(x => {
    //   this.user = JSON.parse(JSON.stringify(x.data));
    // });
    const data: UserLogin = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.loginService.userLogin(data).subscribe((x: any) => {
      localStorage.setItem('id_token', x?.access_token);
      console.log(x);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.loginService.getDetailUserLogin().subscribe((x: any) => {
        console.log(x);
        // let userDetail = {

        // };
        // localStorage.setItem('user');
      });
      this.router.navigate(['user']);
    });
  }
}
