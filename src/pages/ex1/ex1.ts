import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-ex1',
  templateUrl: 'ex1.html'
})
export class Ex1Page {

  countries: string[];
  errorMessage : string;  
  descending: boolean;
  order: number;
  column: string = 'name'; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) { 
  }
    getCountries() {
      this.rest.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error => this.errorMessage = this.errorMessage = <any>error
      );
    }

    ionViewDidLoad() {
      this.getCountries();
    }

    sort(){
      this.descending = !this.descending;
      this.order = this.descending ? 1 : -1;
    }
}
