import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { Observable } from 'rxjs/internal/Observable';
import { UserLogin } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLogin(data: UserLogin): any {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic SUQ6SlBDX09BVVRI',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-type': 'application/x-www-form-urlencoded'
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.post<any>(ApiPath.LOGIN, body.toString(), { headers });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDetailUserLogin():  Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.httpService.get(ApiPath.USERLOGIN) as Observable<any>;
  }
}
