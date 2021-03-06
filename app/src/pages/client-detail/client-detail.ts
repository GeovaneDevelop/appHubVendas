import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage {
  cliente: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get("cliente")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
  }

}
