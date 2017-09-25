import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpService} from '../providers/HttpService';
import {ListService} from '../pages/list/listService'
import {HelloService} from "../pages/hello-ionic/helloService";
import {HttpModule} from "@angular/http";
import {ComponentsModule} from "../components/components.module";
import {SearchPage} from "../pages/search/search";
import {SearchService} from "../pages/search/searchService";
import {TreeListPage} from "../pages/tree-list/tree-list";
import {TreeService} from "../pages/tree-list/treeService";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SearchPage,
    TreeListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SearchPage,
    TreeListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, HttpService,ListService,HelloService,SearchService,TreeService
  ]
})
export class AppModule {}
