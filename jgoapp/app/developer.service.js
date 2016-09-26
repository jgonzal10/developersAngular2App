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
var mock_developers_1 = require('./mock-developers');
var DeveloperService = (function () {
    function DeveloperService() {
    }
    DeveloperService.prototype.getDevelopers = function () {
        return Promise.resolve(mock_developers_1.DEVELOPERS);
    };
    DeveloperService.prototype.getDeveloper = function (id) {
        return Promise.resolve(mock_developers_1.DEVELOPERS).then(function (developers) { return developers.filter(function (developer) { return developer.id === id; })[0]; });
    };
    DeveloperService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_developers_1.DEVELOPERS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    DeveloperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DeveloperService);
    return DeveloperService;
}());
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map