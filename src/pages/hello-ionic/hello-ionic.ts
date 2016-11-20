import { Component } from '@angular/core';
import {ListPage} from "../list/list";
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  goToApp() {
    this.navCtrl.push(ListPage);
  }
}
