let hasValue: boolean = true;
//numberは浮動小数点
let count:number = 10;
let float:number = 3.14;
let minus:number = -10;

//シングル、ダブル、バッククォート対応
let single:string = 'hello';

const person:{
    name: string,
    age: number
} = {
    name:'Jack',
    age:21
}

const fruits: string[] = ['Apple','Banana','Grape'];
const sample: any[] = ['a',1,'d'];

//タプル
const book:[string,number,boolean] = ['business',1500,false];

//列挙型
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot:true,
    size:CoffeeSize.SHORT
}

let anything: any = true;
anything = 'hello';
anything = {};

//Unionタイプ
let unionType:number | string;
unionType = 'hello';
unionType.toUpperCase();

//Literal型：特定の型のみを扱う
//constで定義する
const apple:'apple' = 'apple';
const num: 0 = 0;

//typeエイリアス
type ClothSize = 'small' | 'large' | 'medium';
//Literalの使い道(Unionとの組み合わせ)
let clothSize: ClothSize = 'small';

const cloth:{
    color:string,
    size:ClothSize
} = {
    color: 'white',
    size:'medium'
}

function add(num1: number, num2: number):number{
    return num1 + num2
}
add(2,3);

function sayHello(){
    console.log('Hello');
}

const anotherAdd: (n1:number,n2:number) => number = add;

const doubleNumber = number => number * 2;