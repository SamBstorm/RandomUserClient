import { IRandomUser } from './../models/irandom-user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RandomUserApiService } from '../services/random-user-api.service';

@Injectable({
  providedIn: 'root'
})
export class RandomUserAPiResolver implements Resolve<IRandomUser> {

  constructor(private _apiService : RandomUserApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IRandomUser | Observable<IRandomUser> | Promise<IRandomUser> {
    return this._apiService.get();
  }
}
