/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import * as queryString from 'query-string';
import { Observable } from 'rxjs';
import { RequestUser, UsersResponse } from '../models/user.model';
import { ApiPath } from './../../../core/config/api-path';

@Injectable({
  providedIn: 'root'
})
export class ManageHttpService extends HttpService {
  public constructor(protected override http: HttpClient) {
    super(http);
  }


  public getUser(payload: RequestUser): Observable<UsersResponse> {
    const request = queryString.stringify(payload);
    return this.get(`${ApiPath.GET_CUSTOMER_INFO}?${request}`) as Observable<UsersResponse>;
  }
}
