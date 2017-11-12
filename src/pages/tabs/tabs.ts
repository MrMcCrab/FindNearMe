import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({name: 'tabs-page'})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = 'home-page';
  tab2Root:any = 'about-page';
  tab3Root:any = 'contact-page';

  constructor() {

  }
}
