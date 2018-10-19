import { ComptePage } from './../pages/compte/compte'
import { RecherchePage } from './../pages/recherche/recherche'
import { RestosPage } from './../pages/restos/restos'
import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { HomePage } from './../pages/home/home'

@NgModule({
  declarations: [MyApp, HomePage, RestosPage, RecherchePage, ComptePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, RestosPage, RecherchePage, ComptePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
