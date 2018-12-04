import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { HttpClientModule } from '@angular/common/http'

//PAGES
import { ComptePage } from './../pages/compte/compte'
import { RecherchePage } from './../pages/recherche/recherche'
import { RestosPage } from './../pages/restos/restos'
import { MyApp } from './app.component'
import { HomePage } from './../pages/home/home'
import { RestProvider } from '../providers/rest/rest'
import { RestoPage } from '../pages/resto/resto'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestosPage,
    RecherchePage,
    ComptePage,
    RestoPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestosPage,
    RecherchePage,
    ComptePage,
    RestoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule {}
