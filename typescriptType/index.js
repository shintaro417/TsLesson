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
var unionType = 10;
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
