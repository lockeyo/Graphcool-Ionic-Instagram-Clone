import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { FeedPage } from '../feed/feed';
import { ProfilePage } from '../profile/profile';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = CameraPage;
  tab4Root: any = FeedPage;
  tab5Root: any = ProfilePage;

  constructor(
    private auth: AuthService,
    private nav: NavController
  ) {
  }

  logout() {
    this.auth.logout().subscribe(succ => {
      console.log('Logout!');
        this.nav.setRoot(LoginPage)
    });
  }
}
