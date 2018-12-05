import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Platform, ActionSheetController } from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'
import { RestoPage } from '../resto/resto'
/**
 * Generated class for the RestosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restos',
  templateUrl: 'restos.html'
})
export class RestosPage {
  restaurants: any

  constructor(
    public restProvider: RestProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {
    this.getRestos()
  }
  getRestos() {
    this.restProvider.getRestos().then(data => {
      this.restaurants = data
    })
  }

  openLocation() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Adresse de livraison',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '9 rue de Québec, IUT de Troyes, 10000 Troyes',
          icon: !this.platform.is('ios') ? 'pin' : null,
          handler: () => {
            console.log('location selected')
          }
        },
        {
          text: '24 place Léonard de Vinci, 10430 Rosières-Près-Troyes',
          icon: !this.platform.is('ios') ? 'pin' : null,
          handler: () => {
            console.log('location selected')
          }
        }
      ]
    })
    actionSheet.present()
  }

  openTimer() {
    let actionSheet = this.actionsheetCtrl.create({
      title: "Aujourd'hui",
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'au plus tôt',
          icon: !this.platform.is('ios') ? 'time' : null,
          handler: () => {
            console.log('location selected')
          }
        }
      ]
    })
    actionSheet.present()
  }

  goToRestoPage(resto) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RestoPage, { resto: resto })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher)

    setTimeout(() => {
      console.log('Async operation has ended')
      refresher.complete()
    }, 2000)
  }
}
