import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('ddd');
    req = req.clone({
      setHeaders: {
        'X-Riot-Token': 'RGAPI-233dd092-abfe-49f2-b5f9-77357a82d822',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }
    });

    return next.handle(req);
  }
}
