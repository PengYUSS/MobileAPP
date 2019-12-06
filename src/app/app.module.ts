import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';

import { BarPage } from '../pages/bar/bar';


import { TabsPage } from '../pages/tabs/tabs';

import { SouspagePage } from '../pages/souspage/souspage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageServiceProvider } from '../providers/message-service/message-service';
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    BarPage,
    TabsPage,
    SouspagePage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    BarPage,
    TabsPage,
    SouspagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageServiceProvider
  ]
})
export class AppModule {}
