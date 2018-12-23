import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {LoginPage} from '../login/login'
import {AppProposPage} from '../app-propos/app-propos'

import {RestProvider} from "../../providers/rest/rest";
import {TokenProvider} from "../../providers/token/token";

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
    user: any

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restProvider: RestProvider,
        public tokenProvider: TokenProvider
    ) {
        this.canAccess()
        this.getUser()
    }

    canAccess() {
        if (!this.tokenProvider.isLoggedIn()) {
            this.goToLoginPage()
        }
    }

    getUser() {
        this.restProvider.getUser().then(data => {
            this.user = data
        })
    }

    goToLoginPage() {
        this.navCtrl.push(LoginPage)
    }

    goToProposPage() {
        this.navCtrl.push(AppProposPage)
    }
}
