import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';

const AllPostsQuery = gql`
query allImages {
      allImages {
          id
          picture {
            id
            url
          }
      }
  }
`;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';

  loading: boolean = true;
  allPosts: any;
  allPostsSub: Subscription;

  constructor(
    private nav: NavController,
    private auth: AuthService,
    public apollo: Apollo
  ) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  public doRefresh(refresher) {
   console.log('Begin async operation', refresher);

   this.allPostsSub = this.apollo.watchQuery({
     query: AllPostsQuery
     }).subscribe(({data, loading}) => {
       console.log(data);
       console.log(loading);
       this.allPosts = (data as any).allImages;;
       refresher.complete();
    });
  }

  public setImage(url: string) {
    const styles = {
      'background-image':  `url(${url})`,
      'background-size': 'cover',
      'padding-bottom': '100%',
    };
    return styles;
  }

  public ngOnInit() {
    this.allPostsSub = this.apollo.watchQuery({
      query: AllPostsQuery,
      pollInterval : 5000
    }).subscribe(({data, loading}) => {
      console.log(data);
      console.log(loading);
      this.allPosts = (data as any).allImages;;
    });
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
