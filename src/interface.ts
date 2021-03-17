//type AddFunc = (num1:number,num2:number) => number;
//非推奨
interface AddFunc{
    //メソッド名を書かない=関数の型を定義したのと同義
    (num1:number,num2:number):number;
}
let addFunc : AddFunc;
addFunc = (n1:number,n2:number) => {
    return n1 + n2;
}

interface Namebale{
    name:string;
}

interface Human extends Namebale {
    //readonly:参照のみ
    // readonly name:String;
    age:number;
    //greeting:(message:string) => void;
    //オブジェクト内でのみ使える
    greeting(message:string):void;
} 

class Developer implements Human,Namebale{
    //readOnlyかpublicのみ
    constructor(public name:string,public age:number,public experience:number){}
    greeting(message:string){
        console.log('Hello');
    }
}

const tmpDeveloper = {
    name: 'Quil',
    age:38,
    experience:3,
    greeting(message:string){
        console.log('Hello');
    }
}

const user:Human = tmpDeveloper;
let developer = new Developer('Quil',36,3);
developer.name = 'aa';