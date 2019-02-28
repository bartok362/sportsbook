import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  handleErrors(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  logAll(re) {
    console.log('-->', re);
    return of(re);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(this.logAll),
      catchError(this.handleErrors)
    );
  }
}
