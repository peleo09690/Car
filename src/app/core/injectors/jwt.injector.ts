/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JsonTokenWebInterceptor implements HttpInterceptor {
  public constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = this.addToHeader(request);

    return next.handle(reqClone).pipe(
      catchError((reason) => {
        if (reason.error !== undefined && reason.error.code === 'TOKEN_EXPIRED') {
          // TODO: Implement when TOKEN EXPIRED
        }
        console.log(reason);
        return throwError(() => new Error(reason));
      })
    );
  }

  /**
   * Method to add the Authorization token in header. Returns the new request
   */
  private addToHeader(request: HttpRequest<any>): HttpRequest<any> {
    const token = sessionStorage.getItem('id_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }
    return request;
  }
}
