import { CartPage } from './../cart/cart'
import { Component } from '@angular/core'
import {
  IonicPage,
  NavController,
  NavParams,
  UrlSerializer
} from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'
import { ToastController } from 'ionic-angular'

/**
 * Generated class for the RestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resto',
  templateUrl: 'resto.html'
})
export class RestoPage {
  id: any
  resto: any
  categories: any
  user: any
  totalProduit: number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    public toastCtrl: ToastController
  ) {
    this.resto = navParams.get('resto')
    this.getCategories()
    this.getUser()
  }
  getCategories() {
    this.restProvider.getCategories().then(data => {
      this.categories = data
    })
  }
  addCart(idProduit) {
    this.restProvider.addCart(idProduit).then(data => {
      this.calcNbProduits()
    })
  }
  getUser() {
    this.restProvider.getUser().then(data => {
      this.user = data
      this.calcNbProduits
    })
  }
  calcNbProduits() {
    for (const produit of this.user.cart.cartProduit) {
      this.totalProduit += produit.count
    }
    console.log(this.totalProduit)
  }

  goToCart(resto) {
    this.navCtrl.push(CartPage, { resto: resto })
  }

  toast() {
    const toast = this.toastCtrl.create({
      message: 'Article ajouté au panier',
      duration: 1000
    })
    toast.present()
  }
}
