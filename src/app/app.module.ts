import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
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
    AboutPage,
    CameraPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ApolloModule.forRoot(provideClient)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CameraPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
