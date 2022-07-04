/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@core/models/http-response.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export abstract class HttpService {
  constructor(protected http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      tap((response) => response),
      catchError((err) => of(err))
    );
  }

  post(url: string, payload: object, header?: HttpHeaders): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(url, payload, { headers: header }).pipe(
      tap((response) => response),
      catchError((err) => of(err))
    );
  }

  put(url: string, payload: object): Observable<HttpResponse> {
    return this.http.put<HttpResponse>(url, payload).pipe(
      tap((response) => response),
      catchError((err) => of(err))
    );
  }

  delete(url: string, payload: object): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(url, payload).pipe(
      tap((response) => response),
      catchError((err) => of(err))
    );
  }

  // deleteAction(url: string, payload: string): Observable<HttpResponse> {
  //   return this.http.delete<HttpResponse>(url, payload).pipe(
  //     tap((response) => response),
  //     catchError((err) => of(err))
  //   );
  // }
}
