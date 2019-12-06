import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';
import { SouspagePage } from '../souspage/souspage'

/**
 * Generated class for the BarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html',
})
export class BarPage {

  messageList = [];
  imageList = [];

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              private messageService: MessageServiceProvider) {
    this.getMessagesc28();
    this.getImages();
  }

  getMessagesc28() {
    this.messageService.getMessagesc28().subscribe(data => this.messageList = data);
  }


  getImages() {
    this.messageService.getImages().subscribe(data => this.imageList = data);
  }

  showModal(String){
    let modal = this.modalCtrl.create(SouspagePage, {content: this.messageList[String].content.rendered});
    modal.present();
    console.log(String);
    //console.log(this.imageList[2].lieu);
    //this.navCtrl.push(SouspagePage,{content:String});
  }

}
