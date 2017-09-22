import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchService} from "./searchService";
import {ItemDetailsPage} from "../item-details/item-details";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string='';
  items: string[];
  standards: Array<{id:number, name: string, code: string, type: string, smallImgPath: string, nameKey: string, imgPath:string,engName:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public searchService: SearchService) {
    // this.initializeItems();

  }

  initializeItems() {
    this.items = ['螺丝','song','bing','wei','shi']
  }

  getItems(ev:any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != null) {
      this.searchService.searchStandard(val).then(res=>{
        this.standards=res.result.list;
      });
    }
  }

  toggleSearch(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.searchQuery);
  }

}
