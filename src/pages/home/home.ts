import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public loadProgress: number = 40;
  constructor(public navCtrl: NavController) {
    
  }

}
