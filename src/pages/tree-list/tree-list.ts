import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TreeService} from "./treeService";
import {ListPage} from "../list/list";

/**
 * Generated class for the TreeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tree-list',
  templateUrl: 'tree-list.html',
})
export class TreeListPage {

  rootList: Array<{id:number,name:string,count:number,url:string,parentId:number}>;
  parent:number;
  treeItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public treeService: TreeService) {
    this.parent = 0;
    this.treeItem = navParams.get('tree');
    console.info(this.treeItem);
    if (this.treeItem!=null) {
      this.parent = this.treeItem.id;
    }
    treeService.getTreeByParent(this.parent).then(res => {
      this.rootList = res.result;
      console.info(this.rootList);
    });
  }

  itemTapped(event,tree) {
    if (tree.url == "null") {
      this.navCtrl.push(TreeListPage, {
        tree: tree
      });
    } else {
      this.navCtrl.push(ListPage,{
        treeItem:tree
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreeListPage');
  }

}
