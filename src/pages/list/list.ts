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
  standards: Array<{id:number, name: string, code: string, type: string, smallImgPath: string, nameKey: string, imgPath:string,engName:string}>;
  standardAll: Array<{id:number, name: string, code: string, type: string, smallImgPath: string, nameKey: string, imgPath:string,engName:string}>;
  result:any;
  currentPage:number;
  pageSize:number;
  queryText:string;
  selectVal:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public listService: ListService) {

    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.currentPage = 0;
    this.pageSize=10;
    this.items = [];
    this.standards = [];
    listService.standardBytype(this.selectedItem.name,this.currentPage,this.pageSize).then(res=>{
          this.standardAll=res.result.list;
          for (let i = 0; i < this.standardAll.length; i++) {
            this.standards.push({
              id:this.standardAll[i].id,
              name:this.standardAll[i].name,
              code:this.standardAll[i].code,
              type:this.standardAll[i].type,
              smallImgPath:this.standardAll[i].smallImgPath,
              nameKey:this.standardAll[i].nameKey,
              imgPath:this.standardAll[i].imgPath,
              engName:this.standardAll[i].engName
            });
          }
          this.currentPage++;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation',this.currentPage);

    setTimeout(() => {

      this.listService.searchStandardByType(this.selectedItem.name,this.currentPage,this.pageSize,this.selectVal).then(res=>{
        this.standardAll=res.result.list;
        for (let i = 0; i < this.standardAll.length; i++) {
          this.standards.push({
            id:this.standardAll[i].id,
            name:this.standardAll[i].name,
            code:this.standardAll[i].code,
            type:this.standardAll[i].type,
            smallImgPath:this.standardAll[i].smallImgPath,
            nameKey:this.standardAll[i].nameKey,
            imgPath:this.standardAll[i].imgPath,
            engName:this.standardAll[i].engName
          });
        }
        if (this.standardAll.length > 0) {
          this.currentPage++;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  updateSchedule(event: any,type:string) {
    this.selectVal = event.target.value;

    if (this.selectVal && this.selectVal.trim() != null) {
      this.listService.searchStandardByType(this.selectedItem.name,0,100,this.selectVal).then(res=>{
        this.standards=res.result.list;
      });
    }
  }
}
