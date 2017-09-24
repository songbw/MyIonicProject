import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {SearchService} from "../search/searchService"


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, searchService: SearchService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.info(this.selectedItem)
  }
}
