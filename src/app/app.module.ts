import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Ex0Page } from '../pages/ex0/ex0';
import { Ex1Page } from '../pages/ex1/ex1';
import { Ex2Page } from '../pages/ex2/ex2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Ex0Page,
    Ex1Page,
    Ex2Page,
    SearchPipe,
    SortPipe
    /*,
    Ex3Page,
    Ex4Page,
    Ex5Page,
    Ex6Page*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Ex0Page,
    Ex1Page,
    Ex2Page/*,
    Ex3Page,
    Ex4Page,
    Ex5Page,
    Ex6Page*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
