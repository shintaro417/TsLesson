"use strict";
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
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
var quil = new Person('Quile', 32);
var anotherQuil = {
    name: 'anotherQuil',
    anotherGreeting: quil.greeting
};
anotherQuil.anotherGreeting;
