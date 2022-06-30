import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { UserLogin } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLogin(data: UserLogin): any {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic SlBDX1BBQ0tBR0U6SlBDX1BBQ0tBR0VfU0VDUkVU',
      'Content-type': 'application/x-www-form-urlencoded'
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.post<any>(ApiPath.LOGIN, body.toString(), { headers });
  }
}
