import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = ['螺丝','song','bing','wei','shi']
  }

  getItems(ev:any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != null) {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1) ;
      });
    }
  }

  toggleSearch(event, item) {
    alert(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage', this.searchQuery);
  }

}
