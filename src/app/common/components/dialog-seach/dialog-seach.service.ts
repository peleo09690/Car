import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config/api-path';

@Injectable({
  providedIn: 'root'
})
export class DialogSeachService {
  constructor(
    private http: HttpClient
  ) {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDataDialogCommon(data: string):any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.post<any>(ApiPath.GET_DATA_DIALOG_COMMON, data);
  }
}
