import { ComptePage } from './../compte/compte'
import { RecherchePage } from './../recherche/recherche'
import { RestosPage } from './../restos/restos'
import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1: any
  tab2: any
  tab3: any

  constructor() {
    this.tab1 = RestosPage
    this.tab2 = RecherchePage
    this.tab3 = ComptePage
  }
}
