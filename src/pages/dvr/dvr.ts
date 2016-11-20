import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {VideoPage} from "../video/video";

declare var Chart;

@Component({
  templateUrl: 'dvr.html'
})
export class DvrPage {

  ngAfterViewInit() {

  }
  //
  // constructor(platform: Platform) {
  //   this.isAndroid = platform.is('android');
  // }
  constructor(public navCtrl: NavController) {

  }

  beachTapped() {
    this.navCtrl.push(VideoPage);
  }
}
