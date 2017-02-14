import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  loading: boolean = true;
  allPosts: any;
  allPostsSub: Subscription;

  constructor(
    public navCtrl: NavController,
    public apollo: Apollo
  ) {}

  setImage(url: string) {
    const styles = {
      'background-image':  `url(${url})`,
      'background-size': 'cover',
      'padding-bottom': '100%',
    };
    return styles;
  }

  ngOnInit() {
    this.allPostsSub = this.apollo.watchQuery({
      query: AllPostsQuery,
      pollInterval : 5000
    }).subscribe(({data, loading}) => {
      console.log(data);
      console.log(loading);
      this.allPosts = (data as any).allImages;
    });
  }
}
