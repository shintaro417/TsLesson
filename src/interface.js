"use strict";
var addFunc;
addFunc = function (n1, n2) {
    return n1 + n2;
};
var nameable = {
    name: 'Quil'
};
var Developer = /** @class */ (function () {
    //readOnlyかpublicのみ
    function Developer(age, experience, initNmae) {
        this.age = age;
        this.experience = experience;
        this.initNmae = initNmae;
        if (initNmae) {
            this.name = initNmae;
        }
    }
    Developer.prototype.greeting = function (message) {
        if (message === void 0) { message = 'hello'; }
        console.log('Hello');
    };
    return Developer;
}());
var tmpDeveloper = {
    name: 'Quil',
    age: 38,
    experience: 3,
    greeting: function (message) {
        console.log('Hello');
    }
};
var user = tmpDeveloper;
var developer = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase();
}
