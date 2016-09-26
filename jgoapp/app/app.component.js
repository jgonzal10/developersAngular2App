"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var developers_component_1 = require('./developers/developers.component');
var developer_detail_component_1 = require('./developer-detail.component');
var developer_service_1 = require('./developer.service');
var dashboard_component_1 = require('./dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Developers App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n  <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n  <a [routerLink]=\"['Developers']\">Developers</a>\n  \n  </nav>\n  <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/styles/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, developer_service_1.DeveloperService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/developers',
                name: 'Developers',
                component: developers_component_1.DevelopersComponent
            }, {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            }, {
                path: '/detail/:id',
                name: 'DeveloperDetail',
                component: developer_detail_component_1.DeveloperDetailComponent,
            },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map