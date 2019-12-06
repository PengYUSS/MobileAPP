import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SouspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-souspage',
  templateUrl: 'souspage.html',
})
export class SouspagePage {

  content: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
                
              this.content=navParams.get('content');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SouspagePage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
