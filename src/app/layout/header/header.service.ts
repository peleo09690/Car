import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends HttpService {

  constructor(protected override http: HttpClient) {
    super(http);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public logOut(): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.deleteAction(`${ApiPath.LOG_OUT}`) as Observable<any>;
  }
}
