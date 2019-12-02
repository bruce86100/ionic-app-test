import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  consommations: string[];
  errorMessage : string;  
  constructor(public navCtrl: NavController, public rest: RestApiProvider) {

  
 

  }

}
