import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//引入新闻组件  待删除
import { NewsPage } from '../pages/news/news';
import { NewsinfoPage } from '../pages/newsinfo/newsinfo';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

import { WaringPage } from '../pages/waring/waring';
import { MallPage } from '../pages/mall/mall';
import { SetPage } from '../pages/set/set';
import { CarPage } from '../pages/car/car';

import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    WaringPage,
    MallPage,
    SetPage,
    CarPage,
    StartPage,
    LoginPage,
    NewsPage,   /*申明组件*/
    NewsinfoPage
  ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(MyApp)

    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '返回' /*配置返回按钮*/
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    WaringPage,
    MallPage,
    SetPage,
    CarPage,
    StartPage,
    LoginPage ,
    NewsPage,   /*申明组件*/
    NewsinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
