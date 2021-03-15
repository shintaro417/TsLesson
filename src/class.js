"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    //スコープ外でも値を保持し続けることができる。
    Person.prototype.greeting = function () {
        console.log("Hello My name is " + this.name + ". I am " + this.age + " years old");
        this.explainJob();
    };
    Person.speices = 'Homo sapiens';
    return Person;
}());
var person2 = Person;
// const quil = new Person('Quil',38);
// quil.incrementAge();
// quil.greeting();
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I am teacher. I teach " + this.subject + ".");
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        /**getterとsetterは同じ関数名を命名することができる */
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject');
            }
            return this._subject;
        },
        //value:getの返り値を推定して型を変換してくれる。
        set: function (value) {
            if (!value) {
                throw new Error('There is no value');
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
var teacher = new Teacher('Quil', 38, 'Math');
teacher.greeting();
