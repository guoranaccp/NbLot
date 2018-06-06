import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { WaringPage } from '../waring/waring';
import { MallPage } from '../mall/mall';
import { SetPage } from '../set/set';
import { CarPage } from '../car/car';

import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
//引入新闻组件
import { NewsPage } from '../news/news';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WaringPage;
  tab3Root = MallPage;
  tab4Root = SetPage; 
  tab5Root = CarPage;
  tab6Root = StartPage;
  tab7Root = LoginPage;
  

 

  constructor() {

  }
}
