import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
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
    this.restProvider.addCart(idProduit)
  }
  getUser() {
    this.restProvider.getUser().then(data => {
      this.user = data
    })
  }
}
