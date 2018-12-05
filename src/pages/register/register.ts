import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    email: ''
    password: ''
    password2: ''
    nom: ''
    prenom: ''

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restProvider: RestProvider
    ) {
    }

    /*ionViewDidLoad() {
      console.log('ionViewDidLoad RegisterPage');
    }*/

    register() {
        if (this.password != this.password2) {
            return 'mots de passes différents'
        }
        let formData = {}
        formData['email'] = this.email
        formData['password'] = this.password
        formData['nom'] = this.nom
        formData['prenom'] = this.prenom
        this.restProvider.postRegister(formData).then(data => {
        })
    }

    goToLoginPage() {
        this.navCtrl.push(LoginPage)
    }

}
