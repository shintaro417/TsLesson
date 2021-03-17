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

interface Nameable{
    name?:string;
    nickName?:string;
}

const nameable:Nameable = {
    name:'Quil'
}

interface Human extends Nameable {
    //readonly:参照のみ
    // readonly name:String;
    age:number;
    //greeting:(message:string) => void;
    //オブジェクト内でのみ使える
    greeting(message:string):void;
} 

class Developer implements Human,Nameable{
    name?:string
    //readOnlyかpublicのみ
    constructor(public age:number,public experience:number,public initNmae?:string){
        if(initNmae){
            this.name = initNmae;
        }
    }
    greeting(message:string = 'hello'){
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
let developer = new Developer(38,3);
if(user.name){
    user.name.toUpperCase()
}