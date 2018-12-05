import { AppProposPage } from './../app-propos/app-propos'
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html'
})
export class ComptePage {
  aPropos: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aPropos = AppProposPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage')
  }
}
