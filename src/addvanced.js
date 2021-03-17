"use strict";
var quil = {
    name: 'Quil',
    role: 'front-end',
    follower: 1000
};
//type guard:条件文を使って型を絞り込む(3つほどある)
function toUpperCase(x) {
    //typeofの戻り値は7個くらいしかない
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describeProfile(nomadoWorker) {
    console.log(nomadoWorker.name);
    //in演算子:特定のオブジェクト型を特定する時に有用
    if ('role' in nomadoWorker) {
        console.log(nomadoWorker.role);
    }
    if ('follower' in nomadoWorker) {
        console.log(nomadoWorker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log('bow-bow');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.bark = function () {
        console.log('tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havPet(pet) {
    pet.bark();
    //instanceof:変数の型を絞り込む
    if (pet instanceof Bird) {
        pet.fly();
    }
}
