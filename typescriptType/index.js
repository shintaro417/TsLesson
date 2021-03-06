"use strict";
var hasValue = true;
//numberは浮動小数点
var count = 10;
var float = 3.14;
var minus = -10;
//シングル、ダブル、バッククォート対応
var single = 'hello';
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var sample = ['a', 1, 'd'];
//タプル
var book = ['business', 1500, false];
//列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
var anything = true;
anything = 'hello';
anything = {};
//Unionタイプ
var unionType;
unionType = 'hello';
unionType.toUpperCase();
//Literal型：特定の型のみを扱う
//constで定義する
var apple = 'apple';
var num = 0;
//Literalの使い道(Unionとの組み合わせ)
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function sayHello() {
    console.log('Hello');
}
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
//callback関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
//unknown型
var unknownInput;
var anyInput;
var text;
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
