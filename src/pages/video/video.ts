import { Component } from '@angular/core';

import { Platform, NavController } from 'ionic-angular';
import { VideoPlayer } from 'ionic-native';
import { SpinnerDialog } from 'ionic-native';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'video.html'
})
export class VideoPage {

  onPlay() {
    SpinnerDialog.show();
    setTimeout(() => {
      SpinnerDialog.hide();
      let toast = this.toastCtrl.create({
        message: 'This device appears to be haunted, please un haunt it with the GURU app and try again!',
        duration: 6000
      });
      toast.present();
    }, 1500)
    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   VideoPlayer.play("file:///android_asset/www/img/scary.mp4").then(() => {
    //     console.log('video completed');
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // });

  }

  ngAfterViewInit() {

  }
  //
  // constructor(platform: Platform) {
  //   this.isAndroid = platform.is('android');
  // }
  constructor(public navCtrls: NavController, public platform: Platform, public toastCtrl: ToastController) {

  }
}
