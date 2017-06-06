webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyuserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyuserComponent = (function () {
    function ModifyuserComponent(_userService, router) {
        var _this = this;
        this._userService = _userService;
        this.router = router;
        this.usuarios = [];
        this._userService.obtenerUsuarios()
            .subscribe(function (data) {
            console.log(data);
            _this.usuarios = data;
        });
    }
    ModifyuserComponent.prototype.ngOnInit = function () {
    };
    ModifyuserComponent.prototype.borrarUsuario = function (key$, k) {
        var _this = this;
        if (confirm('¿Esta seguro de eliminar este usuario?')) {
            this._userService.borrarUsuario(key$)
                .subscribe(function (respuesta) {
                console.log(_this.usuarios);
                delete _this.usuarios[k];
            });
        }
    };
    return ModifyuserComponent;
}());
ModifyuserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-modifyuser',
        template: __webpack_require__(261),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ModifyuserComponent);

var _a, _b;
//# sourceMappingURL=modifyuser.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adduser_adduser_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modifyuser_modifyuser_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USUARIOS_ROUTES; });


var USUARIOS_ROUTES = [
    { path: 'usuario', component: __WEBPACK_IMPORTED_MODULE_0__adduser_adduser_component__["a" /* AdduserComponent */] },
    { path: 'usuario/:id', component: __WEBPACK_IMPORTED_MODULE_0__adduser_adduser_component__["a" /* AdduserComponent */] },
    { path: 'usuarios', component: __WEBPACK_IMPORTED_MODULE_1__modifyuser_modifyuser_component__["a" /* ModifyuserComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'usuario/nuevo' }
];
//# sourceMappingURL=usuarios.routes.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentasComponent = (function () {
    function VentasComponent() {
    }
    VentasComponent.prototype.ngOnInit = function () {
    };
    return VentasComponent;
}());
VentasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-ventas',
        template: __webpack_require__(263),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [])
], VentasComponent);

//# sourceMappingURL=ventas.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 152;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(171);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Holis  !';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(249),
        styles: [__webpack_require__(227)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_productos_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_navbar_navbar_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_menu_menu_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_almacen_almacen_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ventas_ventas_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_estadisticas_estadisticas_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_almacen_agregar_agregar_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_file_uploader_file_uploader_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_almacen_modificar_modificar_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_keys_pipe__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_usuarios_usuarios_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_usuarios_adduser_adduser_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_usuarios_modifyuser_modifyuser_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Rutas

// Servicios














//Pipes




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_shared_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_almacen_almacen_component__["a" /* AlmacenComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_ventas_ventas_component__["a" /* VentasComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_estadisticas_estadisticas_component__["a" /* EstadisticasComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_almacen_agregar_agregar_component__["a" /* AgregarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_almacen_modificar_modificar_component__["a" /* ModificarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_20__components_usuarios_usuarios_component__["a" /* UsuariosComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_usuarios_adduser_adduser_component__["a" /* AdduserComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_usuarios_modifyuser_modifyuser_component__["a" /* ModifyuserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_productos_service__["a" /* ProductosService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_almacen_almacen_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_routes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_usuarios_usuarios_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_almacen_almacen_routes__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_usuarios_usuarios_routes__ = __webpack_require__(101);
/* unused harmony export NameRoutingModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });








var APP_ROUTES = [
    { path: 'almacen',
        component: __WEBPACK_IMPORTED_MODULE_1__components_almacen_almacen_component__["a" /* AlmacenComponent */],
        children: __WEBPACK_IMPORTED_MODULE_6__components_almacen_almacen_routes__["a" /* ALMACEN_ROUTES */]
    },
    {
        path: 'usuarios',
        component: __WEBPACK_IMPORTED_MODULE_5__components_usuarios_usuarios_component__["a" /* UsuariosComponent */],
        children: __WEBPACK_IMPORTED_MODULE_7__components_usuarios_usuarios_routes__["a" /* USUARIOS_ROUTES */]
    },
    { path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_routes__["a" /* DASHBOARD_ROUTES */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
var NameRoutingModule = (function () {
    function NameRoutingModule() {
    }
    return NameRoutingModule;
}());

var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__almacen_almacen_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__estadisticas_estadisticas_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ventas_ventas_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarios_usuarios_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__almacen_almacen_routes__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuarios_usuarios_routes__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DASHBOARD_ROUTES; });







var DASHBOARD_ROUTES = [
    { path: 'almacen',
        component: __WEBPACK_IMPORTED_MODULE_0__almacen_almacen_component__["a" /* AlmacenComponent */],
        children: __WEBPACK_IMPORTED_MODULE_5__almacen_almacen_routes__["a" /* ALMACEN_ROUTES */] },
    {
        path: 'usuarios',
        component: __WEBPACK_IMPORTED_MODULE_4__usuarios_usuarios_component__["a" /* UsuariosComponent */],
        children: __WEBPACK_IMPORTED_MODULE_6__usuarios_usuarios_routes__["a" /* USUARIOS_ROUTES */]
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'ventas', component: __WEBPACK_IMPORTED_MODULE_3__ventas_ventas_component__["a" /* VentasComponent */] },
    { path: 'estadisticas', component: __WEBPACK_IMPORTED_MODULE_1__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
    }
    FileUploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    FileUploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    FileUploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    FileUploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    };
    FileUploaderComponent.prototype.handleInputChange = function (e) {
        var file = null;
        file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    FileUploaderComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    FileUploaderComponent.prototype._setActive = function () {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    };
    FileUploaderComponent.prototype._setInactive = function () {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    };
    return FileUploaderComponent;
}());
FileUploaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-file-uploader',
        template: __webpack_require__(255),
        styles: [__webpack_require__(233)],
        inputs: ['activeColor', 'baseColor', 'overlayColor']
    })
], FileUploaderComponent);

//# sourceMappingURL=file-uploader.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(258),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(259),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'keys',
        pure: false
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 171:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".top-30{\n    margin-top: 30px;\n}\n\n.top-10{\n    margin-top: 10px;\n}\n\nlabel{\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "button{\n    margin-right: 1em;\n    margin-left: 1em;\n    margin-top: .6em;\n}\n\n.btn-trash{\n    color: tomato;\n}\n\n.btn-edit{\n    color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* File Uploader Styles  */\n\n.uploader input {\n  display: none;\n}\n\n.uploader {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #efefef;\n  background-color: rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 300px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  outline: 3px dashed #ccc;\n  outline-offset: 5px;\n  position: relative;\n  width: 300px;\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.uploader img,\n.uploader .icon {\n  pointer-events: none;\n}\n\n.uploader,\n.uploader .icon {\n  transition: all 100ms ease-in;\n}\n\n.uploader .icon {\n  color: #eee;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 5em;\n}\n\n.uploader img {\n  left: 50%;\n  opacity: 0;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 50%;\n  transition: all 300ms ease-in;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n\n.uploader img.loaded {\n  opacity: 1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".div-square {\n    padding:5px;\n    border:3px double #e1e1e1;\n    border-radius:8px;\n    margin:5px;\n}\n\n.div-square> a,.div-square> a:hover {\n    color:#808080;\n    text-decoration:none;\n}\n\ni{\n    font-size: 62px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "body{\n\tbackground-color: #fff;\n}\n\nform {\n\tfont-family: 'Roboto', sans-serif;\n\twidth: 380px;\n\tmargin: 1em auto 0 auto;\n\tpadding: 1em 2em 2em 2em;\n\tbackground: #fafafa;\n\tborder: 1px solid #ebebeb;\n\tbox-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\n}\n\n#brand{\n\twidth: 380px;\n\tmargin: 0 auto 0 auto;\n\ttext-align: center;\n}\n\nh2{\n\tfont-family: 'Rubik Mono One', sans-serif;\n\tfont-size: 2rem;\n\tfont-weight: 400;\n\tposition: relative;\n\tmax-width: 60%;\n\tleft: 20%;\n}\n\n.brand{\n\tposition: relative;\n\tmax-width: 80%;\n\tleft: 10%;\n}\n\n.group { \n\tposition: relative; \n\tmargin-bottom: 45px; \n}\n\n.top-30{\n\tmargin-top: 30px;\n}\n\nh1{\n\tfont-weight: 400;\n\tfont-size: 28px;\n\tline-height: 1.2;\n\tmargin-bottom: 10px;\n\tpadding: 0;\n\tmargin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "    body,html{\n\t\theight: 100%;\n\t}\n\n\t/* remove outer padding */\n\t.main .row{\n\t\tpadding: 0px;\n\t\tmargin: 0px;\n\t}\n\n\t/*Remove rounded coners*/\n\n\tnav.sidebar.navbar {\n\t\tborder-radius: 0px;\n\t}\n\n\tnav.sidebar, .main{\n\t transition: margin 200ms ease-out;\n\t}\n\n\t/* Add gap to nav and right windows.*/\n\t.main{\n\t\tpadding: 10px 10px 0 10px;\n\t}\n\n\t/* .....NavBar: Icon only with coloring/layout.....*/\n\n\t/*small/medium side display*/\n\t@media (min-width: 768px) {\n\n\t\t/*Allow main to be next to Nav*/\n\t\t.main{\n\t\t\tposition: absolute;\n\t\t\twidth: calc(100% - 40px); /*keeps 100% minus nav size*/\n\t\t\tmargin-left: 40px;\n\t\t\tfloat: right;\n\t\t}\n\n\t\t/*lets nav bar to be showed on mouseover*/\n\t\tnav.sidebar:hover + .main{\n\t\t\tmargin-left: 200px;\n\t\t}\n\n\t\t/*Center Brand*/\n\t\tnav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\n\t\t\tmargin-left: 0px;\n\t\t}\n\t\t/*Center Brand*/\n\t\tnav.sidebar .navbar-brand, nav.sidebar .navbar-header{\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tmargin-left: 0px;\n\t\t}\n\n\t\t/*Center Icons*/\n\t\tnav.sidebar a{\n\t\t\tpadding-right: 13px;\n\t\t}\n\n\t\t/*adds border top to first nav box */\n\t\tnav.sidebar .navbar-nav > li:first-child{\n\t\t\tborder-top: 1px #e5e5e5 solid;\n\t\t}\n\n\t\t/*adds border to bottom nav boxes*/\n\t\tnav.sidebar .navbar-nav > li{\n\t\t\tborder-bottom: 1px #e5e5e5 solid;\n\t\t}\n\n\t\t/* Colors/style dropdown box*/\n\t\tnav.sidebar .navbar-nav .open .dropdown-menu {\n\t\t\tposition: static;\n\t\t\tfloat: none;\n\t\t\twidth: auto;\n\t\t\tmargin-top: 0;\n\t\t\tbackground-color: transparent;\n\t\t\tborder: 0;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t/*allows nav box to use 100% width*/\n\t\tnav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\n\t\t\tpadding: 0 0px 0 0px;\n\t\t}\n\n\t\t/*colors dropdown box text */\n\t\t.navbar-inverse .navbar-nav .open .dropdown-menu>li>a {\n\t\t\tcolor: #777;\n\t\t}\n\n\t\t/*gives sidebar width/height*/\n\t\tnav.sidebar{\n\t\t\twidth: 200px;\n\t\t\theight: 100%;\n\t\t\tmargin-left: -160px;\n\t\t\tfloat: left;\n\t\t\tz-index: 8000;\n\t\t\tmargin-bottom: 0px;\n\t\t}\n\n\t\t/*give sidebar 100% width;*/\n\t\tnav.sidebar li {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t/* Move nav to full on mouse over*/\n\t\tnav.sidebar:hover{\n\t\t\tmargin-left: 0px;\n\t\t}\n\t\t/*for hiden things when navbar hidden*/\n\t\t.forAnimate{\n\t\t\topacity: 0;\n\t\t}\n\t}\n\n\t/* .....NavBar: Fully showing nav bar..... */\n\n\t@media (min-width: 1330px) {\n\n\t\t/*Allow main to be next to Nav*/\n\t\t.main{\n\t\t\twidth: calc(100% - 200px); /*keeps 100% minus nav size*/\n\t\t\tmargin-left: 200px;\n\t\t}\n\n\t\t/*Show all nav*/\n\t\tnav.sidebar{\n\t\t\tmargin-left: 0px;\n\t\t\tfloat: left;\n\t\t}\n\t\t/*Show hidden items on nav*/\n\t\tnav.sidebar .forAnimate{\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\tnav.sidebar .navbar-nav .open .dropdown-menu>li>a:hover, nav.sidebar .navbar-nav .open .dropdown-menu>li>a:focus {\n\t\tcolor: #CCC;\n\t\tbackground-color: transparent;\n\t}\n\n\tnav:hover .forAnimate{\n\t\topacity: 1;\n\t}\n\tsection{\n\t\tpadding-left: 15px;\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".top-30{\n    margin-top: 30px;\n    margin-left: 2em;\n    margin-right: 2em;\n}\n\na{\n    font-family: 'Roboto', sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "label{\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "button{\n    margin-right: 1em;\n    margin-left: 1em;\n    margin-top: .6em;\n}\n\n.btn-trash{\n    color: tomato;\n}\n\n.btn-edit{\n    color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"guardarCambios()\" [formGroup]=\"formulario\" #forma=\"ngForm\">\n  <div class=\"alert alert-success top-30\" data-toggle=\"modal\" data-target=\"#success\" *ngIf=\"valido\">Producto agregado con exito</div>\n  <div class=\"alert alert-success top-30\" data-toggle=\"modal\" data-target=\"#success\" *ngIf=\"actualizado\">Producto modificado con exito</div>\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('codigo').valid && formulario.get('codigo').touched}\">\n        <label class=\"col-form-label col-sm-3 col-xl-3\" for=\"codigo\">Código:</label>\n        <div class=\"col-sm-9 col-xl-9\">\n          <input [(ngModel)]=\"producto.codigo\" class=\"form-control\" type=\"text\" placeholder=\"Ingresa codigo\" formControlName=\"codigo\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['codigo'].errors?.required && formulario.controls['codigo'].touched\">\n            El código es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('marca').valid && formulario.get('marca').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"pwd\">Marca:</label>\n        <div class=\"col-sm-9 col-xl-9\">\n          <input [(ngModel)]=\"producto.marca\" type=\"text\" class=\"form-control\" placeholder=\"Ingresa marca\" formControlName=\"marca\">\n          <div class=\"form-control-feedback\" *ngIf=\"!formulario.controls['marca'].valid && formulario.controls['marca'].touched\">\n            La marca es necesaria\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('modelo').valid && formulario.get('modelo').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"modelo\">Modelo:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"producto.modelo\" type=\"text\" class=\"form-control\" placeholder=\"Ingresa modelo\" formControlName=\"modelo\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['modelo'].errors?.required && formulario.controls['modelo'].touched\">\n            El modelo es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('identificador').valid && formulario.get('identificador').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"identificador\">Identificador:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"producto.identificador\" type=\"text\" class=\"form-control\" placeholder=\"Ingresa identificador\" formControlName=\"identificador\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['identificador'].errors?.required && formulario.controls['identificador'].touched\">\n            El identificador es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('precio').valid && formulario.get('precio').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"precio\">Precio:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"producto.precio\" type=\"number\" class=\"form-control\" placeholder=\"Ingresa precio\" formControlName=\"precio\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['precio'].errors?.required && formulario.controls['precio'].touched\">\n            El precio es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('costo').valid && formulario.get('costo').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"costo\">Costo:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"producto.costo\" type=\"number\" class=\"form-control\" placeholder=\"Ingresa costo\" formControlName=\"costo\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['costo'].errors?.required && formulario.controls['costo'].touched\">\n            El costo es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('cantidad').valid && formulario.get('cantidad').touched}\">\n        <label class=\"col-form-label col-sm-3\" for=\"cantidad\">Cantidad de mercancia:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"producto.cantidad\" type=\"number\" class=\"form-control\" placeholder=\"Ingresa cantidad\" formControlName=\"cantidad\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['cantidad'].errors?.required && formulario.controls['cantidad'].touched\">\n            La cantidad es necesaria.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"descripcion\">Descripción:</label>\n        <div class=\"col-sm-9\">\n          <textarea [(ngModel)]=\"producto.descripcion\" rows=\"8\" cols=\"100\" \n            class=\"form-control\" placeholder=\"Ingresa una descripcion del producto\"\n            formControlName=\"descripcion\">\n        </textarea>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-12\">\n          <button type=\"submit\" class=\"btn btn-lg btn-outline-primary pull-right\">Guardar</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Segunda columna -->\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Agregar imagen :</label>\n        <app-file-uploader></app-file-uploader>\n      </div>\n    </div>\n\n  </div>\n</form>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs animated fadeIn fast\">\n  <li class=\"nav-item\"> \n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['producto/nuevo']\"> Agregar Producto </a> \n  </li>\n  <li class=\"nav-item\"> \n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['productos']\"> Modificar/Eliminar </a>\n  </li>\n</ul>\n\n<div class=\"top-30 animated fadeIn fast\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<table class=\"table animated fadeIn fast\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>#</th>\n      <th>Codigo</th>\n      <th>Marca</th>\n      <th>Modelo</th>\n      <th>Identificador</th>\n      <th>Precio</th>\n      <th>Costo</th>\n      <th>Cantidad</th>\n      <th>Descripción</th>\n      <th>Opciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let k of productos | keys; let i = index\"\n        [ngClass]=\"{ 'table-danger': productos[k].cantidad === 0, 'table-success': productos[k].cantidad > 0 }\">\n      <td scope = \"row\" > {{i + 1}} </td>\n      <td> {{productos[k].codigo}} </td>\n      <td> {{productos[k].marca}} </td>\n      <td> {{productos[k].modelo}} </td>\n      <td> {{productos[k].identificador}} </td>\n      <td> {{productos[k].precio}} </td>\n      <td> {{productos[k].costo}} </td>\n      <td> {{productos[k].cantidad}} </td>\n      <td> {{productos[k].descripcion}} </td>\n      <button (click)=\"borrarProducto(productos[k].id, k)\"\n              type=\"button\"><i class=\"fa fa-trash btn-trash\" aria-hidden=\"true\"></i></button>\n      <button [routerLink]=\"['/dashboard/almacen/producto',productos[k].id]\"\n              type=\"button\"> <i class=\"fa fa-pencil btn-edit\" aria-hidden=\"true\"></i></button>\n    </tr>\n  </tbody>\n</table>\n<div id=\"content\">\n  \n</div>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Ventas</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Usuarios</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Visitas</a></li>\n</ul>\n\n<div class=\"tab-content\">\n  <div id=\"home\" class=\"tab-pane fade in active\">\n    <img src=\"./../../../assets/img/grafica.png\" alt=\"\">\n  </div>\n  <div id=\"menu1\" class=\"tab-pane fade\">\n    <img src=\"./../../../assets/img/grafica.png\" alt=\"\">\n  </div>\n  <div id=\"menu2\" class=\"tab-pane fade\">\n    <img src=\"./../../../assets/img/grafica.png\" alt=\"\">\n  </div>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<label class=\"uploader\" ondragover=\"return false;\"\n    [class.loaded]=\"loaded\" \n    [style.outlineColor]=\"dragging ? activeColor : baseColor\"\n    (dragenter)=\"handleDragEnter()\"\n    (dragleave)=\"handleDragLeave()\"\n    (drop)=\"handleDrop($event)\">\n    \n    <i class=\"fa fa-picture-o fa-4x\" aria-hidden=\"true\"\n        [style.color]=\"dragging \n            ? ((imageSrc.length > 0) ? overlayColor : activeColor)\n            : ((imageSrc.length > 0) ? overlayColor : baseColor)\"></i>\n    \n    <img \n        [src]=\"imageSrc\" \n        (load)=\"handleImageLoad()\" \n        [class.loaded]=\"imageLoaded\"/>\n    \n    <input type=\"file\" name=\"file\" accept=\"image/*\"\n        (change)=\"handleInputChange($event)\">\n</label>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container animated fadeIn fast\">\n  <h2>Tablero de administración</h2>\n  <hr>\n  <div class=\"alert alert-info\">\n    <strong>Bienvenido a su sistema de administración y\n      control de inventarios.</strong>\n  </div>\n\n  <div class=\"row text-center pad-top\">\n    <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\n      <div class=\"div-square\">\n        <a [routerLink]=\"['/dashboard/ventas']\"> \n          <i class=\"fa fa-shopping-cart fa-4x\" aria-hidden=\"true\"></i>\n          <h4>Ventas</h4>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xl-2\">\n      <div class=\"div-square\">\n        <a [routerLink]=\"['/dashboard/almacen']\"><i class=\"fa fa-barcode fa-4x\" aria-hidden=\"true\"></i>\n          <h4>Almacen</h4>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xl-2\">\n      <div class=\"div-square\">\n        <a [routerLink]=\"['/dashboard/estadisticas']\"> <i class=\"fa fa-bar-chart fa-4x\"></i>\n          <h4>Estadisticas</h4>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xl-2\">\n      <div class=\"div-square\">\n        <a [routerLink]=\"['/dashboard/usuarios']\"> <i class=\"fa fa-user fa-4x\" aria-hidden=\"true\"></i>\n          <h4>Usuarios</h4>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xl-2\">\n      <div class=\"div-square\">\n        <a [routerLink]=\"['/dashboard/home']\"> <i class=\"fa fa-cog fa-4x\" aria-hidden=\"true\"></i>\n          <h4>Ajustes</h4>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"center row\" id=\"brand\">\n    <img class=\"brand\" src=\"/assets/brand/fantomas.png\" width=\"280\" height=\"100\" alt=\"\">\n    <h2>Fantomas</h2>\n</div>\n<div class=\"row\">\n    <form name=\"form\" (ngSubmit)=\"login()\" [formGroup]=\"formulario\" #forma=\"ngForm\">\n    <!--<form name=\"form\" [formGroup]=\"formulario\" #forma=\"ngForm\">-->\n        <h1>Iniciar sesión</h1>\n        <div class=\"alert alert-danger top-30\" *ngIf=\"!valido\">Usuario y/o Contraseña incorrectos</div>\n        <div class=\"form-group top-30\" [ngClass]=\"{ 'has-danger': !formulario.get('username').valid && formulario.get('username').touched}\">\n            <label for=\"user\">Usuario</label>\n            <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" name=\"user\" formControlName=\"username\" required>\n            <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['username'].errors?.required && formulario.controls['username'].touched\">Introduce tu usuario</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': !formulario.get('password').valid && formulario.get('password').touched}\">\n            <label for=\"password\">Contraseña</label>\n            <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" required/>\n            <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['password'].errors?.required && formulario.controls['password'].touched\">Introduce tu contraseña</div>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!forma.valid\" class=\"btn btn-primary btn-block top-30\">Ingresar</button>\n            <!--<button [routerLink]=\"['/dashboard']\" type=\"submit\" [disabled]=\"!forma.valid\" class=\"btn btn-primary btn-block top-30\">Ingresar</button>-->\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse sidebar\" role=\"navigation\">\n    <div class=\"container-fluid\">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['home']\">Menu</a>\n\t\t</div>\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard/home']\">Inicio<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\"></span></a></li>\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard/ventas']\">Ventas<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-shopping-cart\"></span></a></li>\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard/almacen']\">Almacen<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-barcode\"></span></a></li>\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard/estadisticas']\">Estadisticas<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-stats\"></span></a></li>\n\t\t\t\t<!--<li routerLinkActive=\"active\" class=\"dropdown\">\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Estadisticas <span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-stats\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n\t\t\t\t\t\t<li><a href=\"#\">Productos</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Ventas</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Utilidades</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>-->\n\t\t\t\t<li li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard/usuarios']\">Usuarios<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a></li>\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a [routerLink]=\"['/dashboard/home']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Ajustes <span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-cog\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['home']\">Ajuste 1</a></li>\n\t\t\t\t\t\t<li><a [routerLink]=\"['home']\">Ajuste 2</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- Image and text -->\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard/home']\">\n    <img src=\"/assets/brand/fantomas.png\" width=\"80\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Fantomas\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/home']\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Inicio </a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/ventas']\"> <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Ventas </a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/almacen']\"> <i class=\"fa fa-barcode\" aria-hidden=\"true\"></i> Almacen </a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/estadisticas']\"> <i class=\"fa fa-bar-chart \" aria-hidden=\"true\"></i> Estadisticas </a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/usuarios']\"> <i class=\"fa fa-user \" aria-hidden=\"true\"></i> Usuarios </a>\n      </li>\n    </ul>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" \n            type=\"submit\" [routerLink]=\"['/login']\">\n            Cerrar sesión</button>\n  </div>\n</nav>\n\n<div class=\"main top-30 animated fadeIn fast\">\n    <router-outlet class=\"main\"></router-outlet>\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"guardarCambios()\" [formGroup]=\"formulario\" #forma=\"ngForm\">\n  <div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('username').valid && formulario.get('username').touched}\">\n        <label class=\"col-form-label col-sm-3 col-xl-3\">Usuario:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"user.username\" class=\"form-control\" type=\"text\" placeholder=\"Ingresa usuario\" formControlName=\"username\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['username'].errors?.required && formulario.controls['username'].touched\">\n            El usuario es necesario.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{ 'has-danger': !formulario.get('password').valid && formulario.get('password').touched}\">\n        <label class=\"col-form-label col-sm-3\">Contraseña:</label>\n        <div class=\"col-sm-9\">\n          <input [(ngModel)]=\"user.password\" class=\"form-control\" type=\"text\" placeholder=\"Ingresa contraseña\" formControlName=\"password\">\n          <div class=\"form-control-feedback\" *ngIf=\"formulario.controls['password'].errors?.required && formulario.controls['password'].touched\">\n            La contraseña es necesaria.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-12\">\n          <button type=\"submit\" class=\"btn btn-lg btn-outline-primary pull-right\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<table class=\"table animated fadeIn fast\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>#</th>\n      <th>Usuario</th>\n      <th>Contraseña</th>\n      <th>Opciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let k of usuarios | keys; let i = index\">\n      <td scope = \"row\" > {{i + 1}} </td>\n      <td> {{usuarios[k].username}} </td>\n      <td> {{usuarios[k].password}} </td>\n      <button (click)=\"borrarUsuario(usuarios[k].id, k)\"\n              type=\"button\"><i class=\"fa fa-trash btn-trash\" aria-hidden=\"true\"></i></button>\n      <button [routerLink]=\"['/dashboard/usuarios/usuario',usuarios[k].id]\"\n              type=\"button\"> <i class=\"fa fa-pencil btn-edit\" aria-hidden=\"true\"></i></button>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['usuario/nuevo']\"> Agregar usuario </a> \n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['usuarios']\"> Modificar usuario </a> \n  </li>\n</ul>\n\n<div class=\"top-30\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Pendientes</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#home\">Hechas</a></li>\n</ul>\n\n<div class=\"tab-content\">\n  <div id=\"home\" class=\"tab-pane fade in active\">\n    <h3>HOME</h3>\n    <p>Some content.</p>\n  </div>\n  <div id=\"menu1\" class=\"tab-pane fade\">\n    <h3>Menu 1</h3>\n    <p>Some content in menu 1.</p>\n  </div>\n  <div id=\"menu2\" class=\"tab-pane fade\">\n    <h3>Menu 2</h3>\n    <p>Some content in menu 2.</p>\n  </div>\n</div>"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serverURL = 'http://localhost:8080/logincheck';
        this.usuarioURL = 'http://localhost:8080/usuarios/nuevo';
        this.usuariosURL = 'http://localhost:8080/usuarios';
    }
    UserService.prototype.autenticar = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(body);
        return this.http.post(this.serverURL, body, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    UserService.prototype.agregarUsuario = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(body);
        return this.http.post(this.usuarioURL, body, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    UserService.prototype.obtenerUsuarios = function () {
        return this.http.get(this.usuariosURL)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.obtenerUsuario = function (key$) {
        var url = this.usuariosURL + "/" + key$;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.borrarUsuario = function (key$) {
        var url = this.usuariosURL + "/" + key$;
        return this.http.delete(url)
            .map(function (res) { return res.json; });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmacenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlmacenComponent = (function () {
    function AlmacenComponent() {
    }
    AlmacenComponent.prototype.ngOnInit = function () {
    };
    return AlmacenComponent;
}());
AlmacenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-almacen',
        template: __webpack_require__(251),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], AlmacenComponent);

//# sourceMappingURL=almacen.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuariosComponent = (function () {
    function UsuariosComponent() {
    }
    UsuariosComponent.prototype.ngOnInit = function () {
    };
    return UsuariosComponent;
}());
UsuariosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-usuarios',
        template: __webpack_require__(262),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [])
], UsuariosComponent);

//# sourceMappingURL=usuarios.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosService = (function () {
    function ProductosService(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serverURL = 'http://localhost:8080/productos/nuevo';
        this.obtenerURL = 'http://localhost:8080/productos';
    }
    ProductosService.prototype.agregar = function (producto) {
        var body = JSON.stringify(producto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(body);
        return this.http.post(this.serverURL, body, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ProductosService.prototype.obtenerProductos = function () {
        return this.http.get(this.obtenerURL)
            .map(function (res) { return res.json(); });
    };
    ProductosService.prototype.obtenerProducto = function (key$) {
        var url = this.obtenerURL + "/" + key$;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ProductosService.prototype.actualizarProducto = function (producto, key$) {
        var body = JSON.stringify(producto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var url = this.obtenerURL + "/" + key$;
        return this.http.put(url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductosService.prototype.borrarProducto = function (key$) {
        var url = this.obtenerURL + "/" + key$;
        return this.http.delete(url)
            .map(function (res) { return res.json; });
    };
    return ProductosService;
}());
ProductosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductosService);

var _a, _b, _c;
// solicitar(){
//   return this.http.get( this.url )
//             .map( res => {
//               console.log(res.json());
//             })
// }
//# sourceMappingURL=productos.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarComponent = (function () {
    function AgregarComponent(_productosService, router, route) {
        var _this = this;
        this._productosService = _productosService;
        this.router = router;
        this.route = route;
        this.valido = false;
        this.actualizado = false;
        this.producto = {
            codigo: '',
            marca: '',
            modelo: '',
            identificador: '',
            precio: null,
            costo: null,
            cantidad: null,
            descripcion: ''
        };
        this.nuevo = false;
        this.formulario = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'codigo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'marca': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'modelo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'identificador': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'precio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'costo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'cantidad': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'descripcion': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
        this.route.params
            .subscribe(function (parametros) {
            console.log(parametros);
            _this.id = parametros['id'];
            if (_this.id !== 'nuevo') {
                _this._productosService.obtenerProducto(_this.id)
                    .subscribe(function (producto) { return _this.producto = producto; });
            }
        });
    }
    AgregarComponent.prototype.ngOnInit = function () {
        // this._agregarService.solicitar().subscribe();
    };
    AgregarComponent.prototype.guardarCambios = function () {
        var _this = this;
        if (this.id === 'nuevo') {
            this._productosService.agregar(this.producto)
                .subscribe(function (data) {
                _this.valido = true;
                setTimeout(function () {
                    _this.formulario.reset();
                    _this.valido = false;
                    _this.router.navigate(['/dashboard/almacen/producto/nuevo']);
                }, 2000);
            });
        }
        else {
            this._productosService.actualizarProducto(this.producto, this.id)
                .subscribe(function (data) {
                _this.actualizado = true;
                setTimeout(function () {
                    _this.formulario.reset();
                    _this.valido = false;
                    _this.router.navigate(['/dashboard/almacen/productos']);
                }, 2000);
                console.log(data);
            });
        }
    };
    return AgregarComponent;
}());
AgregarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-agregar',
        template: __webpack_require__(250),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AgregarComponent);

var _a, _b, _c;
//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agregar_agregar_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modificar_modificar_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALMACEN_ROUTES; });


var ALMACEN_ROUTES = [
    { path: 'producto', component: __WEBPACK_IMPORTED_MODULE_0__agregar_agregar_component__["a" /* AgregarComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_0__agregar_agregar_component__["a" /* AgregarComponent */] },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_1__modificar_modificar_component__["a" /* ModificarComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'producto/nuevo' }
];
//# sourceMappingURL=almacen.routes.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificarComponent = (function () {
    function ModificarComponent(_productosService, router) {
        var _this = this;
        this._productosService = _productosService;
        this.router = router;
        this.eliminado = false;
        this.productos = [];
        this._productosService.obtenerProductos()
            .subscribe(function (data) {
            console.log(data);
            _this.productos = data;
        });
    }
    ModificarComponent.prototype.ngOnInit = function () {
    };
    ModificarComponent.prototype.borrarProducto = function (key$, k) {
        var _this = this;
        if (confirm('¿Esta seguro de eliminar este producto?')) {
            this._productosService.borrarProducto(key$)
                .subscribe(function (respuesta) {
                console.log(_this.productos, "se borro esta madre");
                delete _this.productos[k];
            });
        }
    };
    return ModificarComponent;
}());
ModificarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-modificar',
        template: __webpack_require__(252),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ModificarComponent);

var _a, _b;
//# sourceMappingURL=modificar.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(253),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstadisticasComponent = (function () {
    function EstadisticasComponent() {
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
    };
    return EstadisticasComponent;
}());
EstadisticasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-estadisticas',
        template: __webpack_require__(254),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], EstadisticasComponent);

//# sourceMappingURL=estadisticas.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(256),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.valido = true;
        this.user = {
            username: '',
            password: ''
        };
        this.formulario = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this._userService.autenticar(this.user)
            .subscribe(function (data) {
            console.log('holis');
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.valido = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(257),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdduserComponent = (function () {
    function AdduserComponent(_userService, router, route) {
        var _this = this;
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.valido = true;
        this.user = {
            username: '',
            password: ''
        };
        this.formulario = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
        this.route.params
            .subscribe(function (parametros) {
            console.log(parametros);
            _this.id = parametros['id'];
            if (_this.id !== 'nuevo') {
                _this._userService.obtenerUsuario(_this.id)
                    .subscribe(function (user) { return _this.user = user; });
            }
        });
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent.prototype.guardarCambios = function () {
        var _this = this;
        if (this.id === 'nuevo') {
            this._userService.agregarUsuario(this.user)
                .subscribe(function (data) {
                _this.valido = true;
                setTimeout(function () {
                    _this.formulario.reset();
                    _this.valido = false;
                    _this.router.navigate(['/dashboard/usuarios/nuevo']);
                }, 2000);
            });
        }
        else {
            // this._userService.actualizarProducto(this.producto, this.id)
            //   .subscribe(data => {
            //     this.actualizado = true;
            //     setTimeout(() => {
            //       this.formulario.reset();
            //       this.valido = false;
            //       this.router.navigate(['/dashboard/almacen/productos']);
            //     }, 2000);
            //     console.log(data);
            //   });
        }
    };
    return AdduserComponent;
}());
AdduserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-adduser',
        template: __webpack_require__(260),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AdduserComponent);

var _a, _b, _c;
//# sourceMappingURL=adduser.component.js.map

/***/ })

},[531]);
//# sourceMappingURL=main.bundle.js.map