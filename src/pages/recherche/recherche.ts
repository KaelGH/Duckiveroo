import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest'
import { RestoPage } from '../resto/resto'

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  restaurants: any = []
  queryRestaurants: any = []
  searchQuery: string = ''

  constructor(
    public restProvider: RestProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log('hefzgrjijdoierjgreijuytguijokjuytfrdfygi')
    this.initializeItems()
  }
  initializeItems() {
    this.getRestos()
    console.log(this.restaurants)
  }

  getRestos() {
    this.restProvider.getRestos().then(data => {
      console.log('restos : ' + data)
      this.restaurants = data
      this.queryRestaurants = data
    })
  }

  getItems(ev: any) {
    this.queryRestaurants = this.restaurants
    // set val to the value of the searchbar
    const val = ev.target.value
    console.log(val)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.queryRestaurants = this.restaurants.filter(function(resto) {
        return resto.name.toLowerCase().indexOf(val.toLowerCase()) > -1
      })
    }
  }

  goToRestoPage(resto) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RestoPage, { resto: resto })
  }
}
