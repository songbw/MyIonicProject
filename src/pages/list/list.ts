import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { ListService } from "./listService";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  selectedItem:any;
  standards: Array<{id:number, name: string, code: string, type: string, smallImgPath: string, namekey: string, imgPath:string,engName:string}>;
  result:any;
  queryText:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public listService: ListService) {

    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    listService.standardBytype(this.selectedItem.name).then(res=>{
          this.standards=res.result.list;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  updateSchedule(event: any) {
    // let val = event.target.value;
    // if (val && val.trim() != '') {
    //   console.info(this.queryText);
    //   this.standards = this.standards.filter((standard) => {
    //     if (standard.name.indexOf(val) > -1) {
    //       console.info(standard);
    //       return standard;
    //     }
    //   });
    //   console.info(this.standards);
    // }
  }
}
