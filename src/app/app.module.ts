import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { CameraPage } from '../pages/camera/camera';
import { FeedPage } from '../pages/feed/feed';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';

import { ApolloModule } from 'apollo-angular';
import { ApolloClient } from 'apollo-client';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { client } from './client';

function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    CameraPage,
    FeedPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ApolloModule.forRoot(provideClient)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    CameraPage,
    FeedPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
