"use strict";
function copy(value, key) {
    return value;
}
console.log(copy({ name: 'Quil', age: 38 }, 'age'));
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
stringLightDatabase.add('grape');
stringLightDatabase.remove('grape');
console.log(stringLightDatabase.get());
var tmp;
var tmp2;
var tmp3;
