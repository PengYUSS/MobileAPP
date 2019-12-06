import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { BarPage } from '../bar/bar';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabBouger = HomePage;
  tabEnfance = AboutPage;
  tabBar = BarPage;


  constructor() {

  }
}
