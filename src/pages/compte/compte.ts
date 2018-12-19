import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { LoginPage } from '../login/login'
import { AppProposPage } from './../app-propos/app-propos'

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage')
  }*/

  goToLoginPage() {
    this.navCtrl.push(LoginPage)
  }
  goToProposPage() {
    this.navCtrl.push(AppProposPage)
  }
}
