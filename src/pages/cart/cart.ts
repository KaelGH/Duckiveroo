import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cart: any
  user: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage')
  }

  getCart() {
    this.restProvider.getUser().then(data => {
      this.user = data
      this.cart = this.user.cart
    })
  }
}
