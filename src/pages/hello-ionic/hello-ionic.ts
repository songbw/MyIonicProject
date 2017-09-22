import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {ListPage} from "../list/list";
import {SearchPage} from "../search/search";

import {HelloService} from "./helloService";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  icons: string[];
  itemRows: Array<any>;
  itemCols: Array<{code: string, name: string, imgPath: string}>;
  fenleis: Array<{id: number,code: string, name: string, imgPath: string}>;
  colCount: number;
  rowCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public helloService: HelloService) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.helloService.getFenlei().then(res => {
      this.fenleis = res.result;
      this.itemRows = [];
      let count = 0;
      this.colCount = 3;
      if (this.fenleis.length % this.colCount == 0) {
        this.rowCount = this.fenleis.length/this.colCount;
      } else {
        this.rowCount = Math.floor(this.fenleis.length/this.colCount) + 1;
      }

      console.info("fenleis count is : ", this.fenleis.length, " coloCount is : ", this.colCount," , rowCount is ; ", this.rowCount);
      for(let i = 0; i < this.rowCount ; i++) {
        this.itemCols = [];
        for (let j = 0; j < this.colCount; j++) {
          if (count < this.fenleis.length) {
            this.itemCols.push({
              code: this.fenleis[count].code,
              name: this.fenleis[count].name,
              imgPath: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
          } else {
            this.itemCols.push({
              code: '',
              name: '',
              imgPath: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
          }
          count++;
        }
        this.itemRows.push(this.itemCols);
      }
    });
  }


  listTapped(event, item) {
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  searchTapped(event) {
    this.navCtrl.push(SearchPage);
  }

}


