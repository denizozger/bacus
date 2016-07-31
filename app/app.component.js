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
var person_service_1 = require('./person.service');
var AppComponent = (function () {
    function AppComponent(personService) {
        this.personService = personService;
        this.intervalInSeconds = 10;
        this.person = { name: '', surname: '', gender: '', region: '' };
    }
    AppComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService
            .getPerson()
            .then(function (person) { return _this.person = person; })
            .catch(function (error) { return _this.error = error; });
    };
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        (function getPersonInALoop() {
            self.getPerson();
            setTimeout(getPersonInALoop, self.intervalInSeconds * 1000);
        })();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<h1>Random person every {{intervalInSeconds}} second(s)</h1>\n  \t<div><label>Name: </label>{{person.name}}</div>\n  \t<div><label>Surname: </label>{{person.surname}}</div>\n  \t<div><label>Gender: </label>{{person.gender}}</div>\n  \t<div><label>Region: </label>{{person.region}}</div>",
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map