import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var Chart;

@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  pet: string = "puppies";
  isAndroid: boolean = false;

  ngAfterViewInit() {

  }
  //
  // constructor(platform: Platform) {
  //   this.isAndroid = platform.is('android');
  // }
  constructor(public navCtrl: NavController) {

  }
}
