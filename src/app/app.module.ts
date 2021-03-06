import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { HttpClientModule } from '@angular/common/http'
import { TokenProvider } from '../providers/token/token'

//PAGES
import { ComptePage } from '../pages/compte/compte'
import { RecherchePage } from '../pages/recherche/recherche'
import { RestosPage } from '../pages/restos/restos'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { RestProvider } from '../providers/rest/rest'
import { RestoPage } from '../pages/resto/resto'
import { AppProposPage } from '../pages/app-propos/app-propos'
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { CartPage } from '../pages/cart/cart'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestosPage,
    RecherchePage,
    ComptePage,
    RestoPage,
    AppProposPage,
    LoginPage,
    RegisterPage,
    CartPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestosPage,
    RecherchePage,
    ComptePage,
    RestoPage,
    AppProposPage,
    LoginPage,
    RegisterPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    TokenProvider
  ]
})
export class AppModule {}
