webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n    <!-- \n      Optimize this app by adding a UsersService which manages the active and inactive users.\n\n      Also add a CounterService which counts the number of active->inactive and inactive->active actions.\n    -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainservice_service__ = __webpack_require__("../../../../../src/app/mainservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_albums_albums_component__ = __webpack_require__("../../../../../src/app/main/albums/albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__photos_photos_component__ = __webpack_require__("../../../../../src/app/photos/photos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var approutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
    { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_9__main_albums_albums_component__["a" /* AlbumsComponent */] },
    { path: 'albums/:id', component: __WEBPACK_IMPORTED_MODULE_9__main_albums_albums_component__["a" /* AlbumsComponent */] },
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_10__photos_photos_component__["a" /* PhotosComponent */] },
    { path: 'photos/:id', component: __WEBPACK_IMPORTED_MODULE_10__photos_photos_component__["a" /* PhotosComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_albums_albums_component__["a" /* AlbumsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__photos_photos_component__["a" /* PhotosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(approutes)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__mainservice_service__["a" /* MainserviceService */]]
    })
], AppModule);

//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/albums/albums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/albums/albums.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"index.html\" class=\"navbar-brand\">Sumit Vekariya</a>\n      <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" navbar-toggle=\"collapsed\" data-target=\"#navbar\" arial-expanded=\"false\"\n        arial-controls=\"navbar\">\n\t\t\t\t\t\t<span class=\"sr-only\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['']\">Home</a></li>\n        <li><a [routerLink]=\"['albums/']\">Album</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb panel-flat\">\n        <li>Home</li>\n        <li class=\"active\">Album</li>\n      </ul>\n    </div>\n\n    <table class=\"table table-striped table-hover table-users\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>User Id</th>\n          <th>Title</th>\n          <th>Photos</th>\n        </tr>\n      </thead>\n      <tbody id=\"div1\">\n        <tr *ngFor = \"let album of albums\">\n          <td>{{ album.id }}</td>\n          <td>{{ album.userId }}</td>\n          <td>{{ album.title }}</td>\n          <!-- <td><img [src] = \"[album.thumbnailUrl]\"><td> -->\n          <td>  <a [routerLink]=\"['/photos', album.id]\"><button class='btn btn-xs btn-flat btn-info'><i class='fa fa-sign-in'></i> Photos </button></a></td></tr>\n            \n      </tbody>\n    </table>\n  </div>\n  <div id=\"div1\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/albums/albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainservice_service__ = __webpack_require__("../../../../../src/app/mainservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsComponent = (function () {
    function AlbumsComponent(mainservice, route, httpclient) {
        this.mainservice = mainservice;
        this.route = route;
        this.httpclient = httpclient;
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainservice.getPictureData(this.route.snapshot.params['id'])
            .subscribe(function (data) {
            _this.temp = data;
        });
        this.mainservice.getAlbumData(this.route.snapshot.params['id'])
            .subscribe(function (data) {
            _this.albums = data;
        });
    };
    return AlbumsComponent;
}());
AlbumsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-albums',
        template: __webpack_require__("../../../../../src/app/main/albums/albums.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/albums/albums.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__mainservice_service__["a" /* MainserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mainservice_service__["a" /* MainserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
], AlbumsComponent);

var _a, _b, _c;
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/albums.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <!-- Page Header start -->\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">Sumit Vekariya</a>\n        <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" navbar-toggle=\"collapsed\" data-target=\"#navbar\" arial-expanded=\"false\"\n          arial-controls=\"navbar\">\n\t\t\t\t\t\t<span class=\"sr-only\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n      </div>\n      <div class=\"navbar-collapse collapse\" id=\"navbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a [routerLink]=\"['main/']\">Home</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"breadcrumb panel-flat\">\n          <li class=\"active\">Home</li>\n        </ul>\n      </div>\n\n      <table class=\"table table-striped table-hover table-users\">\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>User name</th>\n            <th>Email</th>\n            <th>City</th>\n            <th>Number</th>\n            <th>Website</th>\n            <th>Company</th>\n            <th>Album</th>\n          </tr>\n        </thead>\n        <tbody id=\"div10\" >\n          <tr *ngFor = \"let user of users; let i = index\">\n            <td>{{ user.id }}</td>\n            <td>{{ user.name }}</td>\n            <td>{{ user.username }}</td>\n            <td>{{ user.email }}</td>\n            <td>{{ user.address.city }}</td>\n            <td>{{ user.phone }}</td>\n            <td>{{ user.website }}</td>\n            <td>{{ user.company.name }}</td>\n            <td><a  [routerLink] = \"['/albums', user.id]\"><button class='btn btn-xs btn-flat btn-info'><i class='fa fa-sign-in'></i> Album </button></a></td></tr>\n\n\n        </tbody>\n      </table>\n    </div>\n    <div id=\"div1\"></div>\n  </div>\n  \n  <!-- Page Header End -->\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainservice_service__ = __webpack_require__("../../../../../src/app/mainservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(mainservice) {
        this.mainservice = mainservice;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainservice.getUserData()
            .subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mainservice_service__["a" /* MainserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mainservice_service__["a" /* MainserviceService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/main.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainserviceService = (function () {
    function MainserviceService(httpclient) {
        this.httpclient = httpclient;
    }
    MainserviceService.prototype.getUserData = function () {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/users')
            .map(function (data) {
            return data;
        });
    };
    // getAlbumData(id: number) {
    //   return this.httpclient.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
    //   .map(
    //     data => {
    //       return data;
    //     }
    //   );
    // }
    MainserviceService.prototype.getAlbumData = function (id) {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
            .map(function (data) {
            console.log(id);
            return data;
        });
    };
    MainserviceService.prototype.getPictureData = function (id) {
        return this.httpclient.get('https://jsonplaceholder.typicode.com/photos?albumsId=' + id)
            .map(function (data) {
            return data;
        });
    };
    return MainserviceService;
}());
MainserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MainserviceService);

var _a;
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/mainservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Sumit Vekariya</a>\n      <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" navbar-toggle=\"collapsed\" data-target=\"#navbar\" arial-expanded=\"false\"\n        arial-controls=\"navbar\">\n\t\t\t\t\t\t<span class=\"sr-only\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li><a [routerLink]=\"['photos/']\">Photos</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb panel-flat\">\n        <li>Home</li>\n        <li>Album</li>\n        <li class=\"active\">Photos</li>\n      </ul>\n    </div>\n\n    <table class=\"table table-striped table-hover table-users\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>Album Id</th>\n          <th>Title</th>\n          <th>Url</th>\n          <th>Thumbnail</th>\n        </tr>\n      </thead>\n      <tbody id=\"div1\">\n                      <tr *ngFor = \"let photo of photos | slice:0:5\" >\n                        <td> {{ photo.id }} </td>\n                        <td> {{ photo.albumId }} </td>\n                        <td> {{ photo.title }} </td>\n                        <td> {{ photo.url }} </td>\n                        <td><img [src]=\"[photo.thumbnailUrl]\"></td>\n                        \n                      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"div1\"></div>\n</div>\n<!-- Page Header End -->"

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainservice_service__ = __webpack_require__("../../../../../src/app/mainservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosComponent = (function () {
    function PhotosComponent(mainservice, route) {
        this.mainservice = mainservice;
        this.route = route;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainservice.getPictureData(this.route.snapshot.params['id'])
            .subscribe(function (data) {
            _this.photos = data;
            console.log(_this.photos);
        });
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos/photos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mainservice_service__["a" /* MainserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mainservice_service__["a" /* MainserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PhotosComponent);

var _a, _b;
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/photos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Work/Angular Projects/Task in Angular/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map