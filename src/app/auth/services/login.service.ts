/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModelRequest, LoginModelResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService {
  public isLoginAsync$ = new BehaviorSubject<boolean>(false);

  public constructor(
    protected override http: HttpClient
  ) {
    super(http);
  }

  public userLogin(data: LoginModelRequest): Observable<LoginModelResponse> {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic SUQ6SlBDX09BVVRI',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return this.http.post<LoginModelResponse>(ApiPath.LOGIN, body.toString(), { headers });
  }

  // getDetailUserLogin(): Observable<any> {
  //   return this.get(ApiPath.USERLOGIN) as Observable<any>;
  // }
}
