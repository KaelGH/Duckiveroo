import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {RestProvider} from '../../providers/rest/rest'

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
    user: any
    cart: any
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restProvider: RestProvider
    ) {
        this.getCart()
    }

    getCart() {
        this.restProvider.getUser().then(data => {
            console.log(data)
            this.user = data
            this.cart = this.user.cart.cartProduit
            console.log(this.cart)
        })
    }
}
