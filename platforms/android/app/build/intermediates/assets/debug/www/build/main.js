webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComptePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_propos_app_propos__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComptePage = /** @class */ (function () {
    function ComptePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aPropos = __WEBPACK_IMPORTED_MODULE_0__app_propos_app_propos__["a" /* AppProposPage */];
    }
    ComptePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComptePage');
    };
    ComptePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-compte',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\compte\compte.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Compte</ion-title>\n    <span>email@email.email</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="user-infos">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon ios="md-person" md="md-person" item-start></ion-icon>\n        Mes informations\n      </ion-item>\n      <ion-item>\n        <ion-icon ios="md-pin" md="md-pin" item-start></ion-icon>\n        Adresse de livraison\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="appli-infos">\n    <ion-list no-lines>\n      <ion-item (click)="(aPropos)"> A propos de </ion-item>\n      <ion-item> Déconnexion </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\compte\compte.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], ComptePage);
    return ComptePage;
}());

//# sourceMappingURL=compte.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecherchePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resto_resto__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecherchePage = /** @class */ (function () {
    function RecherchePage(restProvider, navCtrl, navParams) {
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restaurants = [];
        this.queryRestaurants = [];
        this.searchQuery = '';
        console.log('hefzgrjijdoierjgreijuytguijokjuytfrdfygi');
        this.initializeItems();
    }
    RecherchePage.prototype.initializeItems = function () {
        this.getRestos();
        console.log(this.restaurants);
    };
    RecherchePage.prototype.getRestos = function () {
        var _this = this;
        this.restProvider.getRestos().then(function (data) {
            console.log('restos : ' + data);
            _this.restaurants = data;
            _this.queryRestaurants = data;
        });
    };
    RecherchePage.prototype.getItems = function (ev) {
        this.queryRestaurants = this.restaurants;
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.queryRestaurants = this.restaurants.filter(function (resto) {
                return resto.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    RecherchePage.prototype.goToRestoPage = function (resto) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resto_resto__["a" /* RestoPage */], { resto: resto });
    };
    RecherchePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recherche',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\recherche\recherche.html"*/'<ion-header>\n  <ion-navbar color="primary" class="search-navbar">\n    <ion-list>\n      <ion-item>\n        <ion-input\n          (input)="getItems($event)"\n          type="text"\n          placeholder="Chercher restaurants et types de cuisine"\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Restaurants</h3>\n  <ion-list no-lines>\n    <ion-item\n      *ngFor="let resto of queryRestaurants"\n      (click)="goToRestoPage(resto)"\n    >\n      <ion-avatar item-start> <img src="{{ resto.image }}" /> </ion-avatar>\n      {{ resto.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\recherche\recherche.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecherchePage);
    return RecherchePage;
}());

//# sourceMappingURL=recherche.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resto_resto__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RestosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestosPage = /** @class */ (function () {
    function RestosPage(restProvider, navCtrl, navParams, platform, actionsheetCtrl) {
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.getRestos();
    }
    RestosPage.prototype.getRestos = function () {
        var _this = this;
        this.restProvider.getRestos().then(function (data) {
            _this.restaurants = data;
            console.log('resto.ts :', _this.restaurants);
        });
    };
    RestosPage.prototype.openLocation = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Adresse de livraison',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '9 rue de Québec, IUT de Troyes, 10000 Troyes',
                    icon: !this.platform.is('ios') ? 'pin' : null,
                    handler: function () {
                        console.log('location selected');
                    }
                },
                {
                    text: '24 place Léonard de Vinci, 10430 Rosières-Près-Troyes',
                    icon: !this.platform.is('ios') ? 'pin' : null,
                    handler: function () {
                        console.log('location selected');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RestosPage.prototype.openTimer = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: "Aujourd'hui",
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'au plus tôt',
                    icon: !this.platform.is('ios') ? 'time' : null,
                    handler: function () {
                        console.log('location selected');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RestosPage.prototype.goToRestoPage = function (resto) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resto_resto__["a" /* RestoPage */], { resto: resto });
    };
    RestosPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RestosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restos',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\restos\restos.html"*/'<ion-header>\n  <ion-navbar color="primary" class="restos-navbar">\n    <button ion-button large class="butn-search" (click)="openLocation()">\n      <ion-icon ios="md-pin" md="md-pin"></ion-icon>\n      Lieu sélectionné\n    </button>\n    <button ion-button large class="butn-time" (click)="openTimer()">\n      <ion-icon ios="md-time" md="md-time"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="none" refreshingSpinner="crescent">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card\n    *ngFor="let resto of restaurants"\n    margin-top\n    (click)="goToRestoPage(resto)"\n  >\n    <div class="card-image"><img src="{{resto.image}}" /></div>\n    <ion-card-content no-padding>\n      <ion-card-title> {{ resto.name }} </ion-card-title>\n      <div class="resto-infos" margin-bottom>\n        <ion-icon ios="md-happy" md="md-happy" color="primary"> </ion-icon>\n        <span class="likes">{{ resto.likes }}%</span> •\n        <span class="rating">\n          <span *ngIf="resto.generalcost > 0">€</span>\n          <span *ngIf="resto.generalcost > 1">€</span>\n          <span *ngIf="resto.generalcost > 2">€</span> </span\n        >&nbsp;• {{ resto.type }}\n        <p>\n          {{ resto.prixLivraison }} € de livraison • {{ resto.minOrder }} €\n          minimum\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\restos\restos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], RestosPage);
    return RestosPage;
}());

//# sourceMappingURL=restos.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-propos/app-propos.module": [
		280,
		4
	],
	"../pages/compte/compte.module": [
		281,
		3
	],
	"../pages/recherche/recherche.module": [
		282,
		2
	],
	"../pages/resto/resto.module": [
		283,
		1
	],
	"../pages/restos/restos.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compte_compte__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recherche_recherche__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restos_restos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__restos_restos__["a" /* RestosPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__recherche_recherche__["a" /* RecherchePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_0__compte_compte__["a" /* ComptePage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\home\home.html"*/'<ion-tabs>\n  <ion-tab tabIcon="md-home" tabTitle="Restaurants" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="md-search" tabTitle="Recherche" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="md-person" tabTitle="Compte" [root]="tab3"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppProposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppProposPage = /** @class */ (function () {
    function AppProposPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppProposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppProposPage');
    };
    AppProposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app-propos',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\app-propos\app-propos.html"*/'<!--\n  Generated template for the AppProposPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>appPropos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\app-propos\app-propos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppProposPage);
    return AppProposPage;
}());

//# sourceMappingURL=app-propos.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compte_compte__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recherche_recherche__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_restos_restos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resto_resto__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//PAGES







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_restos_restos__["a" /* RestosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recherche_recherche__["a" /* RecherchePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_compte_compte__["a" /* ComptePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resto_resto__["a" /* RestoPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/app-propos/app-propos.module#AppProposPageModule', name: 'AppProposPage', segment: 'app-propos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compte/compte.module#ComptePageModule', name: 'ComptePage', segment: 'compte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recherche/recherche.module#RecherchePageModule', name: 'RecherchePage', segment: 'recherche', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resto/resto.module#RestoPageModule', name: 'RestoPage', segment: 'resto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restos/restos.module#RestosPageModule', name: 'RestosPage', segment: 'restos', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_restos_restos__["a" /* RestosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recherche_recherche__["a" /* RecherchePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_compte_compte__["a" /* ComptePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resto_resto__["a" /* RestoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://duckapi.thibaudcordina.fr';
    }
    RestProvider.prototype.getRestos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.apiUrl + '/restaurants', {
                params: {
                    token: 'test'
                }
            })
                .subscribe(function (data) {
                resolve(data);
                return data;
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getResto = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.apiUrl + '/restaurants/' + id, {
                params: {
                    token: 'test'
                }
            })
                .subscribe(function (data) {
                resolve(data);
                return data;
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.apiUrl + '/categories', {
                params: {
                    token: 'test'
                }
            })
                .subscribe(function (data) {
                resolve(data);
                return data;
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestoPage = /** @class */ (function () {
    function RestoPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.resto = navParams.get('resto');
        this.getCategories();
    }
    RestoPage.prototype.getCategories = function () {
        var _this = this;
        this.restProvider.getCategories().then(function (data) {
            _this.categories = data;
        });
    };
    RestoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resto',template:/*ion-inline-start:"C:\dev\appli\Duckiveroo\src\pages\resto\resto.html"*/'<ion-header>\n  <ion-navbar color="primary"> {{ resto.name }} </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="card-image"><img src="{{resto.image}}" /></div>\n  <div class="resto-content">\n    <p class="resto-name">{{ resto.name }}</p>\n    <div class="resto-infos">\n      <div>\n        <ion-icon ios="md-happy" md="md-happy" color="primary"> </ion-icon>\n        <span class="likes">{{ resto.likes }}%</span> •\n        <span class="rating">\n          <span *ngIf="resto.generalcost > 0">€</span>\n          <span *ngIf="resto.generalcost > 1">€</span>\n          <span *ngIf="resto.generalcost > 2">€</span> </span\n        >&nbsp;• {{ resto.type }}\n      </div>\n      <p margin-bottom>\n        {{ resto.prixLivraison }} € de livraison • {{ resto.minOrder }} €\n        minimum\n      </p>\n      <p>{{ resto.description }}</p>\n    </div>\n  </div>\n  <div class="allergie">\n    <ion-icon ios="md-pizza" md="md-pizza"> </ion-icon>\n    <p>Ce restaurant prend en compte vos allergies alimentaires.</p>\n  </div>\n  <div class="menu-content">\n    <div class="categorie" *ngFor="let categorie of resto.categories">\n      <h3>{{ categorie.name }}</h3>\n      <div class="produits" *ngFor="let produit of categorie.produits">\n        <p class="produit-nom">\n          {{ produit.name }}\n          <span class="produit-prix">{{ produit.price }} €</span>\n        </p>\n        <p class="produit-description">{{ produit.description }}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\appli\Duckiveroo\src\pages\resto\resto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], RestoPage);
    return RestoPage;
}());

//# sourceMappingURL=resto.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map