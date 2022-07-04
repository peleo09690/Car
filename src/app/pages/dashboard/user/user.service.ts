import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as queryString from 'query-string';
import { HttpService } from '@core/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { ApiPath } from '@core/config/api-path';
import { UsersResponse } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  constructor(protected override http: HttpClient) {
    super(http);
  }
  public getUser(): Observable<UsersResponse> {
    const user = {
      username: 'aaa',
      id: 'bbb'
    };
    const payload = queryString.stringify(user);
    // const request = queryString.stringify(payload);
    return this.get(`${ApiPath.GET_CUSTOMER_INFO}?${payload}`) as Observable<UsersResponse>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public updateUser(payload:any): Observable<any> {
    // const request = queryString.stringify(payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.put(`${ApiPath.CREATEANDUPDATEUSER}`,payload) as Observable<any>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public createUser(payload:any): Observable<any> {
    // const request = queryString.stringify(payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.post(`${ApiPath.CREATEANDUPDATEUSER}`,payload) as Observable<any>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // public deleteUser(id:string,payload:any): Observable<any> {
  //   // const request = queryString.stringify(payload);
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   return this.deleteAction(`${ApiPath.DELETE_USER}${id}`,payload) as Observable<any>;
  // }
}
