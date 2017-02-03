import { CookieService } from './../../providers/cookie-service';
import { Component } from '@angular/core';


/*
  Generated class for the Mother component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'mother',
  templateUrl: 'mother.html',
  providers:[CookieService]
})
export class MotherComponent {

  constructor(private cookServ: CookieService) {
    this.cookServ.generateCookies();

  }



}
