import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClienUserLogintResponse, LoginModelResponse, UserLogin } from '@auth/models';
import { LoginService } from '@auth/services/login.service';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { Utils } from '@common/utils/utils';


@Component({
  selector: 'app-loggin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup({});
  public user!: LoginModelResponse;
  public utils = Utils;


  public constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private dialogService: DialogConfirmService
  ) { }

  public ngOnInit(): void {
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');
    const currentUser = localStorage.getItem('id_token');

    this.loginService.isLoginAsync$.next(false);
    // if (userLogin && currentUser) {
    //   this.router.navigate(['master/user']);
    // }

    this.initialForm();
  }

  public togglePassWord(): void {
    this.showPassword = !this.showPassword;
  }
  public submitForm(): void {
    this.router.navigate(['system/user']);
    // const data: UserLogin = this.loginForm.value;

    // if (this.loginForm.invalid) {
    //   this.dialogService.customMessage('error', 'screen.login.required-msg');

    //   return;
    // }

    // this.loginService.userLogin(data).subscribe((res: LoginModelResponse) => {
    //   if (res) {
    //     localStorage.removeItem('id_token');
    //     localStorage.removeItem('user_login');
    //     localStorage.setItem('id_token', res.access_token);
    //     this.loginService.getDetailUserLogin().subscribe((x: HttpClienUserLogintResponse) => {
    //       localStorage.removeItem('user_login');
    //       localStorage.setItem('user_login', JSON.stringify(x.data));
          this.loginService.isLoginAsync$.next(true);
    //       this.router.navigate(['system/user']);
    //     }
    //     );
    //   }
    // });
  }

  private initialForm(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, [this.requireValidator(), this.userLoginValidator()]),
      password: new FormControl(null, [this.requireValidator()])
    });
  }

  private requireValidator = (): ValidatorFn => {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value === null || control.value === '') return { requireLogin: true };

      return null;
    };
  };



  private userLoginValidator = (): ValidatorFn => {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value === null || control.value === '') return null;

      if (control.value.toString().length !== 6) {
        return { errorFormat: true };
      }

      return null;
    };
  };
}
