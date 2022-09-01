import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RandomUserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.params.has("noIntercept")) return next.handle(request);
    const newRequest = request.clone({                              //Clone la requête HTTP car le paramètre request est immutable (impossible de modifier)
      params: (request.params ? request.params : new HttpParams())  //Si des params sont présent les garder, sinon new HttpParams() (initialiser)
      .append('nat', 'FR')                                          //append pour ajouter un paramètre
    });
    return next.handle(newRequest);                                 //.handle(...) remplace l'ancienne requête HTTP par la nouvelle.
  }
}
