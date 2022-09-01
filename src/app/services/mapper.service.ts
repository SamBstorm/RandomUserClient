import { IRandomUserAPIResult } from './../models/irandom-user-api-result';
import { IRandomUser } from './../models/irandom-user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  public ToRandomUser(data: IRandomUserAPIResult): IRandomUser {
    let d = data.results[0];
    return {
      firstname: d.name.first,
      lastname: d.name.last,
      email: d.email,
      username: d.login.username,
      password: d.login.password,
      picture: d.picture.large,
      birthdate: new Date(Date.parse(d.dob.date)),
      gender: d.gender,
      location: {
        street: d.location.street.name,
        number: d.location.street.number,
        city: d.location.city,
        postcode: d.location.postcode,
        country: d.location.country
      }
    };
  }
}
