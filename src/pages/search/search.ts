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
  standards: Array<{id:number, nameKey: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public searchService: SearchService) {
    // this.initializeItems();

  }


  getItems(ev:any) {
    let val = ev.target.value;

    if (val && val.trim() != null) {
      this.searchService.searchStandard(val).then(res=>{
        this.standards=res.result.list;
      });
    }
  }

  toggleSearch(event, item) {
    this.searchService.findStandard(item.id).then(res => {
      this.navCtrl.push(ItemDetailsPage, {
        item:res.result
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.searchQuery);
  }

}
