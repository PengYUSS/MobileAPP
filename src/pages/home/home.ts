import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';
import { SouspagePage } from '../souspage/souspage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  messageList = [];
  imageList = [];

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              private messageService: MessageServiceProvider) {
    this.getMessagesc74();
    this.getImages();
  }

  getMessagesc74() {
    this.messageService.getMessagesc74().subscribe(data => this.messageList = data);
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
