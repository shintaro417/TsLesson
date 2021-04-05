"use strict";
var _a, _b, _c;
const quil = {
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
    return x;
}
//オーバーロードの全ての関数に対応した関数を入れなければならない。
const upperHello = function (x) { return 0; };
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
class Dog {
    constructor() {
        //タグつけ
        this.kind = 'dog';
    }
    bark() {
        console.log('bow-bow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    bark() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havPet(pet) {
    pet.bark();
    switch (pet.kind) {
        case 'bird':
            pet.fly;
            break;
        case 'dog':
            pet.bark;
            break;
    }
    //instanceof:変数の型を絞り込む。interfaceは使えない
    if (pet instanceof Bird) {
        pet.fly();
    }
}
//HTMLElementは抽象的だから手動で型を変える必要がある。->型アサーションか後に asをつける(Reactを使わない人向け)
// const input = <HTMLInputElement>document.getElementById('input');
// const input2 = document.getElementById('input') as HTMLInputElement
document.getElementById('input').value = 'initial input';
//None-null assertion operater->nullではないことを確定させる。->!を使う
const input = document.getElementById('input');
const designer = {
    name: 'Quil',
    role: 'web',
};
console.log(designer.role);
const downLoadedData = {
    id: 1
};
//Optional Chaining->undefinedであった場合にエラーを防ぐ処理
console.log((_b = (_a = downLoadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.firstName);
//Nullish Coalescing->undefined/nullかそれ以外かで処理を分岐させる。(空文字 0はtrue扱い->or演算子とは違う)
const userData = (_c = downLoadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
//enum型と数字は互換性がある。
//関数型では代入先の関数の引数によっては引数が無視されることもある。
//Classではprivate/protected修飾子がある場合は互換性がなくなる。
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
let target = Color.RED;
let source = 100;
target = source;
