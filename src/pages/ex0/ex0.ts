import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ex0',
  templateUrl: 'ex0.html'
})
export class Ex0Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  	
  }
  public helloWorld() : string
  {
    return "Hello World !";
  }

}
