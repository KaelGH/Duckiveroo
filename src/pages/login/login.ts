import {Component} from '@angular/core'
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {RestProvider} from '../../providers/rest/rest'
import {RegisterPage} from '../register/register'
import { ComptePage } from "../compte/compte";

import {TokenProvider} from "../../providers/token/token";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    email: ''
    password: ''
    user: {}

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restProvider: RestProvider,
        public tokenProvider: TokenProvider
    ) {
    }

    login() {
        this.restProvider.postLogin(this.email, this.password).then(data => {
            console.log(data)
            this.tokenProvider.token = data
            this.navCtrl.push(ComptePage)
        })
    }

    goToRegisterPage() {
        this.navCtrl.push(RegisterPage)
    }
}
