import { MapperService } from './mapper.service';
import { IRandomUserAPIResult } from './../models/irandom-user-api-result';
import { IRandomUser } from '../models/irandom-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserApiService {

  private _url : string = "https://randomuser.me/api";

  constructor(private _http : HttpClient, private _mapper : MapperService) { }

  public get() : Observable<IRandomUser> {
    return this._http.get<IRandomUserAPIResult>(this._url, {params: new HttpParams().append("noIntercept","true")})
    .pipe(map<IRandomUserAPIResult,IRandomUser>(
      (data) => this._mapper.ToRandomUser(data)
    ));
  }
}
