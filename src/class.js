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
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    //スコープ外でも値を保持し続けることができる。
    Person.prototype.greeting = function () {
        console.log("Hello My name is " + this.name + ". I am " + this.age + " years old");
    };
    return Person;
}());
var person2 = Person;
var quil = new Person('Quil', 38);
quil.incrementAge();
quil.greeting();
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.greeting = function () {
        console.log("Hello My name is " + this.name + ". I am " + this.age + " years old. I teach " + this.subject);
    };
    return Teacher;
}(Person));
var teacher = new Teacher('Quil', 38, 'Math');
teacher.greeting();
