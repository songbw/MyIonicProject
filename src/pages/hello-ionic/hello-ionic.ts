import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {ListPage} from "../list/list";
import {SearchPage} from "../search/search";

// import {HelloService} from "./helloService";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  icons: string[];
  itemRows: Array<any>;
  itemCols: Array<{title: string, note: string, icon: string}>;
  userInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.itemRows = [];

    for(let i = 1; i < 4; i++) {
      this.itemCols = [];
      for (let j = 1; j < 4; j++) {
        this.itemCols.push({
          title: 'Item ' + i + j,
          note: 'This is item #' + i + j,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }
      this.itemRows.push(this.itemCols);
    }
    console.info(this.itemRows);
  }

  // getUser() {
  //   this.helloService.getUser().then(res=>{
  //     this.userInfo=res.data;
  //   })
  // }

  listTapped(event, item) {
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  searchTapped(event) {
    this.navCtrl.push(SearchPage);
  }

}


