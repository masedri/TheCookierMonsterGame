import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CokkieService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CookieService {
  private cookies: number;

  constructor(public http: Http) {

  }

  generateCookies(){
    setTimeout(()=>{
      this.cookies = 10;

    },5000);
  }
  

}
