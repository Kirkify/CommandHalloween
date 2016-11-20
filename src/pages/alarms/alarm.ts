import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alarm.html'
})
export class AlarmPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  num: number = 0;
  slogans: string[] = [
      'Don’t let any vampires suck the fun out of your night…have a frightfully festive Halloween!',
      'Why did the witch walk across the street? Boo-cause her broom was in the shop! Happy Halloween…have a “spook”tacular time this year!',
      'Lions and Tigers and Twilight characters, oh my! This year’s Halloween party is sure to be full of some great costumes…we can’t wait to see you there! Happy Halloween!',
      'Who loves Halloween more than anyone else? No, not Dracula or Frankenstein…give up? The dentist…go easy on the candy this year so you don’t have to see him again soon!'
  ];

  showAlert(title:string) {

    let alert = this.alertCtrl.create({
      title: title.substring(0, title.length - 1),
      subTitle: this.slogans[this.num],
      buttons: ['OK']
    });

    this.num++;
    if (this.num >= 4) this.num = 0;
    alert.present();
  }

}
