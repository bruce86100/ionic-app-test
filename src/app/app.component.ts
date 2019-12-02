import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Ex0Page } from '../pages/ex0/ex0';
import { Ex1Page } from '../pages/ex1/ex1';
import { Ex2Page } from '../pages/ex2/ex2';
// import { Ex3Page } from '../pages/ex3/ex3';
// import { Ex4Page } from '../pages/ex4/ex4';
// import { Ex5Page } from '../pages/ex5/ex5';
// import { Ex6Page } from '../pages/ex6/ex6';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Ex0', component: Ex0Page },
      { title: 'Ex1', component: Ex1Page },
      { title: 'Ex2', component: Ex2Page }
   //    { title: 'Ex3', component: Ex3Page },
   //    { title: 'Ex4', component: Ex4Page },
   //    { title: 'Ex5', component: Ex5Page },
   //    { title: 'Ex6', component: Ex6Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
