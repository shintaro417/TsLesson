"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logging(message) {
    return function (target) {
        console.log('Logging..');
        console.log(message);
    };
}
// function Logging(target:Function){
//     console.log('Logging..');
// }
function Component(template, selector) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                console.log('Component');
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1').textContent = instance.name;
                }
            }
        };
    };
}
function PropertyLogging(target, propertyKey) {
    console.log('propertyLoggin');
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target, propertyKey, descreptor) {
    console.log('propertyLoggin');
    console.log(target);
    console.log(propertyKey);
}
function AccessorLogging(target, propertyKey, descreptor) {
    console.log('AccessorLoggin');
    console.log(target);
    console.log(propertyKey);
}
function ParamatorLogging(target, propertyKey, paramatorIndex) {
    console.log('ParamatorLoggin');
    console.log(target);
    console.log(propertyKey);
}
function Enumrable(isEnumrable) {
    return function (target, propertyKey, descriptor) {
        return {
            enumrable: isEnumrable
        };
    };
}
let User = class User {
    constructor(_age) {
        this._age = _age;
        this.name = 'aaa';
        console.log('User was created');
    }
    get() {
        return this._age;
    }
    set(value) {
        this._age = value;
    }
    //@Enumrable(false)
    greeting(message) {
        console.log('Hello');
    }
};
__decorate([
    PropertyLogging
], User.prototype, "name", void 0);
__decorate([
    AccessorLogging
], User.prototype, "get", null);
__decorate([
    MethodLogging,
    __param(0, ParamatorLogging)
], User.prototype, "greeting", null);
User = __decorate([
    Component('<h1>{{ name }}</h1>', '#app') //Userのnameに対応するようにする。index.htmlのid = appに代入する
    ,
    Logging('Loggin User')
], User);
