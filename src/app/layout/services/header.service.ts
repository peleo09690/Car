import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { Observable } from 'rxjs';
import { UserModelResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends HttpService {

  public constructor(protected override http: HttpClient) {
    super(http);
  }

  public getCurrentUser(): Observable<UserModelResponse> {
    return this.get(ApiPath.USER_LOGIN) as Observable<UserModelResponse>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // public logOut(): Observable<any> {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   return this.deleteAction(`${ApiPath.LOG_OUT}`) as Observable<any>;
  // }
}
