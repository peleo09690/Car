import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpClientResponse } from '@core/models';
import { HttpService } from '@core/services';
import { ChangePasswordRequest, UserModelResponse } from '@layout/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends HttpService {

  public constructor(protected override http: HttpClient) {
    super(http);
  }

  public getCurrentUser(): Observable<UserModelResponse> {
    return this.get(ApiPath.USER_LOGIN) as Observable<UserModelResponse>;
  }

  public changePassword(request: ChangePasswordRequest): Observable<HttpClientResponse | HttpErrorResponse> {
    return this.post(ApiPath.CHANGE_PASSWORD, request) as Observable<HttpClientResponse | HttpErrorResponse>;
  }

  public logout(): Observable<HttpClientResponse | HttpErrorResponse> {
    return this.delete(ApiPath.LOGOUT) as Observable<HttpClientResponse | HttpErrorResponse>;
  }
}
