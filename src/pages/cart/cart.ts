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
    resto: any
    totalPrice: number
    totalAmount: number

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restProvider: RestProvider
    ) {
        this.resto = navParams.get('resto')
        this.getCart()
        this.removeFromCart('')
    }

    getCart() {
        this.restProvider.getUser().then(data => {
            this.user = data
            if (this.user.cart != null) {
                this.cart = this.user.cart.cartProduit
                this.getCartInfos()
            }
        })
    }

    addCart(idProduit) {
        this.restProvider.addCart(idProduit).then(data => {
            this.getCart()
        })
    }

    removeFromCart(idProduit) {
        this.restProvider.removeFromCart(idProduit).then(data => {
            this.getCart()
        })
    }

    getCartInfos() {
        this.totalPrice = 0
        this.totalAmount = 0
        if (this.cart != null) {
            for (let produit of this.cart) {
                console.log(produit)
                this.totalAmount += produit.count
                this.totalPrice += produit.count * produit.produit.price
                console.log(this.totalPrice, this.totalAmount)
            }
        }
    }
}