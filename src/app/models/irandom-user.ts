export interface IRandomUser {
    username : string;
    gender : string;
    firstname : string;
    lastname : string;
    location : ILocation;
    birthdate : Date;
    email : string;
    password : string;
    picture : string;
}

export interface ILocation {
    street : string;
    number : number;
    city : string;
    postcode : string | number;
    country : string;
}
