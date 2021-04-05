"use strict";
let hasValue = true;
//numberは浮動小数点
let count = 10;
let float = 3.14;
let minus = -10;
//シングル、ダブル、バッククォート対応
let single = 'hello';
const person = {
    name: 'Jack',
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
const sample = ['a', 1, 'd'];
//タプル
const book = ['business', 1500, false];
//列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
let anything = true;
anything = 'hello';
anything = {};
//Unionタイプ
let unionType;
unionType = 'hello';
unionType.toUpperCase();
//Literal型：特定の型のみを扱う
//constで定義する
const apple = 'apple';
const num = 0;
//Literalの使い道(Unionとの組み合わせ)
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium'
};
// function add(num1: number, num2: number):number{
//     return num1 + num2
// }
// add(2,3);
function sayHello() {
    console.log('Hello');
}
const anotherAdd = add;
//const doubleNumber = number => number * 2;
//callback関数
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
//unknown型
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
//他の型に代入することができない
//text = unknownInput;
//代入したい場合
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
//never型:決して何も返さない型
//無限ループやErrorを投げる時に使える
function error(message) {
    //throw new Error(message);
    while (true) {
    }
}
