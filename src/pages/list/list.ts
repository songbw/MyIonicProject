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
  treeItem:any;
  parentId:number;
  type:string;
  listTitle:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public listService: ListService) {

    this.selectedItem = navParams.get('item');
    this.treeItem = navParams.get('treeItem');
    this.parentId = 0;
    this.type='';
    if (this.treeItem != null) {
      this.parentId = this.treeItem.id;
      this.listTitle=this.treeItem.name;
    }
    if (this.selectedItem != null) {
      this.type = this.selectedItem.name;
      this.listTitle=this.selectedItem.name;
    }
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.currentPage = 0;
    this.pageSize=10;
    this.items = [];
    this.standards = [];
    listService.searchStandardByType(this.type,this.currentPage,this.pageSize,this.selectVal,this.parentId).then(res=>{
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

      this.listService.searchStandardByType(this.type,this.currentPage,this.pageSize,this.selectVal,this.parentId).then(res=>{
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
      this.listService.searchStandardByType(this.type,0,100,this.selectVal,this.parentId).then(res=>{
        this.standards=res.result.list;
      });
    }
  }
}
