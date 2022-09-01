import { IRandomUser } from './../../../models/irandom-user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  randomUser! : IRandomUser;

  constructor(private _activatitedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    /*this.randomUser = {
      firstname :"Samuel",
      lastname : "Legrain",
      email : "samuel.legrain@bstorm.be",
      birthdate : new Date(1987,8,27),
      gender : "male",
      username : "slegrain",
      password : "Test1234=",
      picture : "https://lh3.googleusercontent.com/ykuq3KjWWVgwt9fV1zh1ZzAhXJF6pKV5tbUGH0BZIBBP5yIICcavfO-knvLifR1rv0uBiEnlngw=w640-h400-e365",
      location : {
        street : "Avenue des soldats",
        number : 54,
        postcode : "6000",
        city : "Charleroi",
        country : "BELGIUM"
      }
    }*/
    /*this._apiService
      .get()
      .subscribe({
        next: (data) => this.randomUser = data,
        error : (err) => console.error(err)
      });*/
      this.randomUser = this._activatitedRoute.snapshot.data["randomUser"];
    }

}
