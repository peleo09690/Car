import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@core/models/http-response.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(protected http: HttpClient) { }

  get(url: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(url).pipe(
      tap((response) => response),
      catchError((err) => of(err))
    );
  }

  post(url: string, payload: object): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(url, payload).pipe(
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
}
