import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {AlarmPage} from "../alarms/alarm";
import {DvrPage} from "../dvr/dvr";


@Component({
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {

  }

  analyticsTapped() {
    this.navCtrl.push(ItemDetailsPage);
  }

  alarmsTapped() {
    this.navCtrl.push(AlarmPage);
  }

  dvrTapped() {
    this.navCtrl.push(DvrPage);
  }
}
