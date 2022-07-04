/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import * as queryString from 'query-string';
import { Observable } from 'rxjs';
import { ApiPath } from './../../../core/config/api-path';
import { RequestUser, UsersLoginResponse, UsersResponse } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManageHttpService extends HttpService {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  public login(payload: HttpParams): Observable<UsersLoginResponse> {
    const header = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic SlBDX0lEOkpQQ19PQVVUSA=='
    });
    return this.http.post(ApiPath.LOGIN, payload, { headers: header }) as Observable<UsersLoginResponse>;
  }

  public getUser(payload: RequestUser): Observable<UsersResponse> {
    const request = queryString.stringify(payload);
    return this.get(`${ApiPath.GET_CUSTOMER_INFO}?${request}`) as Observable<UsersResponse>;
  }
}
